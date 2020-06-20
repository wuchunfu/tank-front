import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import "./Edit.less"
import TankComponent from "../../common/component/TankComponent";
import User from "../../common/model/user/User";
import Moon from "../../common/model/global/Moon";
import TankTitle from "../widget/TankTitle";
import {Button, Form, Input, InputNumber, Switch} from "antd";
import {SaveOutlined} from '@ant-design/icons';
import TankContentCard from "../widget/TankContentCard";
import Preference from "../../common/model/preference/Preference";
import FileUtil from "../../common/util/FileUtil";
import {FormInstance} from "antd/lib/form";
import MessageBoxUtil from "../../common/util/MessageBoxUtil";
import Sun from "../../common/model/global/Sun";

interface IProps extends RouteComponentProps {

}

interface IState {

}

export default class Edit extends TankComponent<IProps, IState> {

  formRef = React.createRef<FormInstance>();

  user: User = Moon.getSingleton().user
  preference: Preference = Moon.getSingleton().preference

  constructor(props: IProps) {
    super(props);

    this.state = {};

    this.preference.detailLoading = true
  }

  componentDidMount() {

    let that = this

    that.refreshPreference()
  }

  refreshPreference() {

    let that = this

    that.preference.httpFetch(function () {
      that.preference.detailLoading = false
      that.updateUI()
    })
  }

  onFinish(values: any) {
    console.log('Success:', values);

    let that = this

    let user = that.user

    that.preference.assign(values)

    that.preference.httpSave(function () {
      MessageBoxUtil.success(Moon.t("operationSuccess"))

      Sun.updateFrame()

      Sun.navigateTo("/preference/index")
    })

  };

  onFinishFailed(errorInfo: any) {
    console.log('Failed:', errorInfo);
  };


  render() {

    let that = this

    let preference = that.preference

    const layout = {
      labelCol: {span: 6},
      wrapperCol: {span: 18},
    };

    let initialValues: any = preference.getForm()

    return (
      <div className="page-preference-edit">

        <TankTitle name={Moon.t("preference.editPreference")}>
        </TankTitle>

        <TankContentCard loading={preference.detailLoading}>

          <Form
            {...layout}
            name="basic"
            ref={this.formRef}
            initialValues={initialValues}
            onFinish={this.onFinish.bind(this)}
            onFinishFailed={this.onFinishFailed.bind(this)}
            onValuesChange={() => {
              that.updateUI()
            }}
          >

            <Form.Item
              label={Moon.t("preference.websiteName")}
              name="name"
              rules={[{required: true, message: Moon.t("preference.enterWebsiteName")}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="logo"
              name="logoUrl"
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="favicon"
              name="faviconUrl"
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label={Moon.t("preference.copyright")}
              name="copyright"
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label={Moon.t("preference.extraInfo")}
              name="record"
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label={Moon.t("preference.officeUrl")}
              name="officeUrl"
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label={Moon.t("preference.zipMaxNumLimit")}
              name="downloadDirMaxNum"
              rules={[{required: true, message: Moon.t("preference.enterZipMaxNumLimit")}]}
            >
              <InputNumber min={-1} max={1000} className='w150'/>
            </Form.Item>

            <Form.Item label={Moon.t("preference.zipMaxSizeLimit")}
                       required={true}
            >
              <Form.Item
                name="downloadDirMaxSize"
                rules={[{required: true, message: Moon.t("preference.enterZipMaxSizeLimit")}]}
                noStyle
              >
                <InputNumber min={-1} className='w150'/>
              </Form.Item>
              <span
                className="pl10"> {Moon.t("preference.current")}:
                {(this.formRef && this.formRef.current) ?
                  FileUtil.humanFileSize(this.formRef.current.getFieldValue("downloadDirMaxSize"))
                  : FileUtil.humanFileSize(preference.defaultTotalSizeLimit)}
              </span>
            </Form.Item>

            <Form.Item label={Moon.t("preference.userDefaultSizeLimit")}
                       required={true}
            >
              <Form.Item
                name="defaultTotalSizeLimit"
                rules={[{required: true, message: Moon.t("preference.enterUserDefaultSizeLimit")}]}
                noStyle
              >
                <InputNumber min={-1} className='w150'/>
              </Form.Item>
              <span
                className="pl10"> {Moon.t("preference.current")}:
                {(this.formRef && this.formRef.current) ?
                  FileUtil.humanFileSize(this.formRef.current.getFieldValue("defaultTotalSizeLimit"))
                  : FileUtil.humanFileSize(preference.defaultTotalSizeLimit)}
              </span>
            </Form.Item>

            <Form.Item
              label={Moon.t("preference.allowRegister")}
              name="allowRegister"
              required={true}
              valuePropName="checked"
            >
              <Switch/>
            </Form.Item>

            <div className="text-right">
              <Button type="primary" htmlType="submit" icon={<SaveOutlined/>}>
                {Moon.t("save")}
              </Button>
            </div>

          </Form>
        </TankContentCard>

      </div>
    );
  }
}


