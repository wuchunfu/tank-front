import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./List.less";
import TankComponent from "../../common/component/TankComponent";
import Pager from "../../common/model/base/Pager";
import Matter from "../../common/model/matter/Matter";
import Moon from "../../common/model/global/Moon";
import SortDirection from "../../common/model/base/SortDirection";
import MatterPanel from "../matter/widget/MatterPanel";
import {
  Button,
  Col,
  Empty,
  Input,
  Modal,
  Pagination,
  Row,
  Space,
} from "antd";
import MessageBoxUtil from "../../common/util/MessageBoxUtil";
import {
  ExclamationCircleFilled,
  PlusSquareOutlined,
  MinusSquareOutlined,
  SyncOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import ImagePreviewer from "../widget/previewer/ImagePreviewer";
import Sun from "../../common/model/global/Sun";
import { UserRole } from "../../common/model/user/UserRole";
import BreadcrumbModel from "../../common/model/base/option/BreadcrumbModel";
import BreadcrumbPanel from "../widget/BreadcrumbPanel";
import Lang from "../../common/model/global/Lang";

interface IProps extends RouteComponentProps {}

interface IState {}

export default class List extends TankComponent<IProps, IState> {
  //当前文件夹信息。
  matter = new Matter();
  //当前选中的文件
  selectedMatters: Matter[] = [];
  //搜索的文字
  searchText: string | null = null;
  //获取分页的一个帮助器
  pager = new Pager<Matter>(this, Matter, 100);
  user = Moon.getSingleton().user;
  preference = Moon.getSingleton().preference;
  //当前面包屑模型数组。
  breadcrumbModels: BreadcrumbModel[] = [];

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    //刷新一下列表
    if (this.user.role === UserRole.ADMINISTRATOR) {
      this.pager.getFilter("userUuid")!.visible = true;
    } else {
      this.pager.setFilterValue("userUuid", this.user.uuid);
    }
    this.pager.enableHistory();
    this.refresh();
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any) {
    if (this.props.location.search !== nextProps.location.search) {
      this.pager.enableHistory();
      this.refresh();
    }
  }

  refresh = () => {
    // 清空暂存区
    this.selectedMatters = [];
    // 刷新文件列表
    this.refreshPager();
    // 刷新面包屑
    this.refreshBreadcrumbs();
  };

  refreshPager = () => {
    // 初始化当前matter uuid
    if (this.matter.uuid !== this.pager.getFilterValue("puuid")) {
      this.matter.uuid =
        this.pager.getFilterValue("puuid") || Matter.MATTER_ROOT;
    }

    this.pager.setFilterValue("puuid", this.matter.uuid);

    //如果没有任何的排序，默认使用时间倒序和文件夹在顶部
    if (!this.pager.getCurrentSortFilter()) {
      this.pager.setFilterValue("orderCreateTime", SortDirection.DESC);
      this.pager.setFilterValue("orderDir", SortDirection.DESC);
    }

    //如果没有设置用户的话，那么默认显示当前登录用户的资料
    if (!this.pager.getFilterValue("userUuid")) {
      this.pager.setFilterValue("userUuid", this.user.uuid);
    }

    // 过滤掉被软删除的文件
    this.pager.setFilterValue("deleted", true);

    this.pager.httpList();
  };

  checkMatter = (matter?: Matter) => {
    if (matter) {
      if (matter.check) {
        this.selectedMatters.push(matter);
      } else {
        const index = this.selectedMatters.findIndex(
          (item) => item.uuid === matter.uuid
        );
        this.selectedMatters.splice(index, 1);
      }
    } else {
      //统计所有的勾选
      this.selectedMatters = [];
      this.pager.data.forEach((matter) => {
        if (matter.check) {
          this.selectedMatters.push(matter);
        }
      });
    }
    this.updateUI();
  };

  checkAll = () => {
    this.pager.data.forEach((i) => {
      i.check = true;
    });
    this.checkMatter();
  };

  checkNone = () => {
    this.pager.data.forEach((i) => {
      i.check = false;
    });
    this.checkMatter();
  };

  deleteBatch = () => {
    Modal.confirm({
      title: Lang.t("actionCanNotRevertConfirm"),
      icon: <ExclamationCircleFilled twoToneColor="#FFDC00" />,
      onOk: () => {
        const uuids = this.selectedMatters.map((i) => i.uuid).toString();
        this.matter.httpDeleteBatch(uuids, () => {
          MessageBoxUtil.success(Lang.t("operationSuccess"));
          this.refresh();
        });
      },
    });
  };

  searchFile = (value?: string) => {
    this.pager.resetFilter();
    if (value) {
      this.pager.setFilterValue("orderCreateTime", SortDirection.DESC);
      this.pager.setFilterValue("orderDir", SortDirection.DESC);
      this.pager.setFilterValue("name", value);
      this.pager.setFilterValue("deleted", true);
      this.pager.httpList();
    } else {
      this.refresh();
    }
  };

  changeSearch = (e: any) => {
    if (!e.currentTarget.value) this.searchFile();
  };

  changePage = (page: number) => {
    this.pager.page = page - 1; // page的页数0基
    this.pager.httpList();
    this.updateUI();
  };

  previewImage = (matter: Matter) => {
    let imageArray: string[] = [];
    let startIndex = -1;
    this.pager.data.forEach((item) => {
      if (item.isImage()) {
        imageArray.push(item.getPreviewUrl());
        if (item.uuid === matter.uuid) {
          startIndex = imageArray.length - 1;
        }
      }
    });

    ImagePreviewer.showMultiPhoto(imageArray, startIndex);
  };

  goToDirectory = (id: string) => {
    this.searchText = null;
    this.pager.setFilterValue("puuid", id);
    this.pager.page = 0;
    const query = this.pager.getParams();
    Sun.navigateQueryTo({ path: "/matter/list", query });
    this.refresh();
  };

  //刷新面包屑
  refreshBreadcrumbs = () => {
    const uuid = this.pager.getFilterValue("puuid") || Matter.MATTER_ROOT;

    //根目录简单处理即可。
    if (uuid === Matter.MATTER_ROOT) {
      this.matter.uuid = Matter.MATTER_ROOT;
      this.breadcrumbModels = [
        {
          name: Lang.t("matter.recycleBin"),
          path: "/matter/list",
          query: {},
          displayDirect: true,
        },
      ];
    } else {
      this.matter.uuid = uuid;
      this.matter.httpDetail(() => {
        const arr = [];
        let cur: Matter | null = this.matter;
        do {
          arr.push(cur);
          cur = cur.parent;
        } while (cur);

        this.breadcrumbModels = arr.reduceRight(
          (t: any, item: Matter, i: number) => {
            const query = this.pager.getParams();
            query["puuid"] = item.uuid!;
            t.push({
              name: item.name,
              path: "/matter/list",
              query: query,
              displayDirect: !i, // 当前目录不需要导航
            });
            return t;
          },
          [
            {
              name: Lang.t("matter.recycleBin"),
              path: "/matter/list",
              query: {},
              displayDirect: false,
            },
          ]
        );
        this.updateUI();
      });
    }
  };

  render() {
    const {
      pager,
      selectedMatters,
    } = this;
    return (
      <div className="matter-list">
        <BreadcrumbPanel breadcrumbModels={this.breadcrumbModels} />

        <Row className="mt10">
          <Col xs={24} sm={24} md={14} lg={16}>
            <Space className="buttons">
              {selectedMatters.length !== pager.data.length ? (
                <Button type="primary" className="mb10" onClick={this.checkAll}>
                  <PlusSquareOutlined />
                  {Lang.t("selectAll")}
                </Button>
              ) : null}
              {pager.data.length &&
              selectedMatters.length === pager.data.length ? (
                <Button
                  type="primary"
                  className="mb10"
                  onClick={this.checkNone}
                >
                  <MinusSquareOutlined />
                  {Lang.t("cancel")}
                </Button>
              ) : null}
              {selectedMatters.length ? (
                  <Button
                    type="primary"
                    className="mb10"
                    onClick={this.deleteBatch}
                  >
                    <DeleteOutlined />
                    {Lang.t("matter.hardDelete")}
                  </Button>
              ) : null}

              <Button type="primary" className="mb10" onClick={this.refresh}>
                <SyncOutlined />
                {Lang.t("refresh")}
              </Button>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={10} lg={8}>
            <Input.Search
              className="mb10"
              placeholder={Lang.t("matter.searchFile")}
              onSearch={(value) => this.searchFile(value)}
              onChange={this.changeSearch}
              enterButton
            />
          </Col>
        </Row>

        <div>
          {pager.loading || pager.data.length ? (
            pager.data.map((matter) => (
              <MatterPanel
                recycleMode
                key={matter.uuid!}
                matter={matter}
                onGoToDirectory={this.goToDirectory}
                onDeleteSuccess={this.refresh}
                onCheckMatter={this.checkMatter}
                onPreviewImage={this.previewImage}
              />
            ))
          ) : (
            <Empty description={Lang.t("matter.noContentYet")} />
          )}
        </div>
        <Pagination
          className="mt10 pull-right"
          onChange={this.changePage}
          current={pager.page + 1}
          total={pager.totalItems}
          pageSize={pager.pageSize}
          hideOnSinglePage
        />
      </div>
    );
  }
}