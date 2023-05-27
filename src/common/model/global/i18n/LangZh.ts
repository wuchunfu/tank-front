let LangZh = {
  eyeblueTank: '蓝眼云盘',
  dashboard: {
    totalInvokeNum: '总PV',
    weekRate: '周环比',
    dayRate: '日环比',
    yesterdayInvoke: '昨日PV',
    totalUV: '总UV',
    yesterdayUV: '昨日UV',
    totalMatterNum: '总文件数',
    yesterdayMatterNum: '昨日文件数',
    totalFileSize: '文件总大小',
    yesterdayMatterSize: '昨日文件大小',
    recentDayInvokeUV: '最近{}日PV/UV',
    downloadMatterTop10: '文件下载量TOP10',
    activeIpTop10: '活跃IP TOP10',
    loading: '加载中…',
    date: '日期',
    num: '数量',
    warnHint: '温馨提示：本页面数据每日凌晨0点清洗一次。',
    reRun: '立即重跑',
  },
  install: {
    configMysql: '配置数据库',
    dbType: '数据库类型',
    port: '端口',
    schema: '库名',
    username: '用户名',
    password: '密码',
    charset: '编码',
    mysqlConnectionPass: 'MySQL连接测试通过',
    testMysqlConnection: '测试MySQL连接',
    notice: '注意',
    sqliteNotice1: 'sqlite是一个轻量的文件数据库，无需安装即可使用',
    mysqlNotice1:
      '如果数据库和蓝眼云盘安装在同一台服务器，Host可以直接填写 127.0.0.1。',
    mysqlNotice2:
      '数据库账户的权限要求要能够创建表，否则第二步"创建表"操作会出错',
    validateMysqlFirst: '请首先验证数据库连接',
    preStep: '上一步',
    nextStep: '下一步',
    createTable: '创建表',
    installed: '已安装',
    installedButMissing: '已安装,字段缺失',
    toBeInstalled: '待安装',
    allFields: '所有字段',
    missingFields: '缺失字段',
    tableNotice: '点击"一键建表"后会按照以下逻辑执行操作：',
    tableNotice1: '如果某表不存在，则直接创建表。',
    tableNotice2: '如果某表存在并且字段齐全，那么不会对该表做任何操作。',
    tableNotice3: '如果某表存在但是部分字段缺失，那么会在该表中增加缺失字段。',
    tableNotice4:
      '如果表中有多余的字段(多余字段即不是蓝眼云盘需要的字段)，不会做删除处理，而会维持原样。',
    oneKeyCreate: '一键建表',
    createFinish: '建表完成',
    createTableSuccess: '建表成功',
    crateTableFirst: "请首先点击'一键建表'",
    setAdministrator: '设置管理员',
    detectAdministrator: '检测到系统中已经存在有以下管理员：',
    useOrCreateAdministrator:
      '你可以使用其中一位管理员的用户名和密码进行验证，或者创建一位新的管理员账户',
    validateAdministrator: '验证管理员账户',
    createAdministrator: '创建管理员账户',
    administratorUsername: '管理员用户名',
    administratorPassword: '管理员密码',
    administratorRePassword: '再次输入密码',
    usernameRule: '由于用户名将作为文件上传的目录，因此只允许字母数字以及"_"。',
    congratulationInstall: '恭喜，安装成功！',
    configAdminFirst: '请首先配置管理员信息！',
    createAdminSuccess: '创建管理员成功！',
    validateAdminSuccess: '验证管理员成功！',
    pressToHome: '点击下方按钮来完成安装过程并进入首页。',
    enterHome: '完成，并进入首页',
    finish: '完成',
  },
  layout: {
    allFiles: '个人文件',
    myShare: '我的分享',
    bin: '回收站',
    setting: '网站设置',
    dashboard: '监控统计',
    users: '用户管理',
    logout: '退出登录',
    about: '关于',
    install: '安装网站',
    dragMouseUp: '可以松手啦~',
    space: '共享空间',
  },
  matter: {
    file: '文件',
    directory: '文件夹',
    rename: '重命名',
    download: '下载',
    delete: '删除',
    hardDelete: '彻底删除',
    recovery: '恢复',
    more: '更多',
    share: '分享',
    close: '关闭',
    size: '大小',
    preview: '预览',
    move: '移动',
    moveTo: '移动到',
    upload: '上传',
    create: '新建',
    createTime: '创建时间',
    updateTime: '修改时间',
    deleteTime: '删除时间',
    root: '根目录',
    fillInPicLink: '请填写图片链接',
    rePick: '重新选择',
    chooseImage: '选择图片',
    uploadMode: '上传模式',
    fillMode: '填写模式',
    sizeExceedLimit: '文件大小超过了限制{}>{}',
    dropNotDirectory: '不可拖拽文件夹进行上传',
    setPublic: '设置为公有文件',
    setPrivate: '设置为私有文件',
    copyLink: '复制下载链接',
    enterName: '请输入名称',
    publicFileEveryoneCanVisit: '公有文件，任何人可以访问',
    fileDetail: '文件详情',
    expire: '有效期',
    copyLinkAndCode: '复制链接+提取码',
    uploaded: '已上传',
    uploadDir: '上传文件夹',
    uploadInfo: '上传信息',
    uploadErrorInfo: '部分文件上传失败，可导出csv文件查看',
    exportCSV: '导出上传错误详情',
    speed: '速度',
    fileInfo: '文件基本信息',
    fileName: '文件名',
    path: '路径',
    copyPath: '复制路径',
    publicOrPrivate: '文件公开性',
    privateInfo: '私有文件，只有自己或者授权的用户可以下载',
    publicInfo: '公有文件，任何人可以通过链接下载',
    downloadTimes: '下载次数',
    operations: '操作',
    oneTimeLink: '一次性链接',
    oneTimeLinkInfo:
      '使用一次性链接下载后链接立即失效,可以分享这个链接给朋友，点击复制',
    imageCache: '图片缓存',
    searchFile: '搜索文件',
    noContentYet: '该目录下暂无任何内容',
    allFiles: '全部文件',
    newDirectory: '新建文件夹',
    notChoose: '没有选择文件',
    exceed1000: '最多只能同时选取1000个文件',
    noImageCache: '暂无图片缓存数据',
    recycleBin: '回收站',
    deleted: '已删除',
    unCompatibleBrowser: '当前浏览器不支持，请切换浏览器尝试',
    canIUse: '查看当前浏览器是否支持，点击跳转',
    intoRecycleBin: '放入回收站',
    finishingTip: '后台文件整理中，请稍候...',
  },
  router: {
    allFiles: '全部文件',
    fileDetail: '文件详情',
    login: '登录',
    autoLogin: '自动登录',
    register: '注册',
    users: '用户列表',
    userDetail: '用户详情',
    changePassword: '修改密码',
    editUser: '编辑用户',
    createUser: '创建用户',
    shareDetail: '分享详情',
    myShare: '我的分享',
    dashboard: '监控统计',
    install: '安装网站',
    setting: '网站设置',
  },
  preference: {
    basic: '基本信息',
    preview: '预览引擎',
    scan: '扫描磁盘',
    websiteName: '网站名称',
    logo: 'Logo',
    logoSquare: 'logo请使用正方形图片，否则在显示时会裁剪成正方形',
    onlyAllowIco: '只允许上传.ico图标',
    copyright: '版权信息(支持html)',
    extraInfo: '备案信息(支持html)',
    zipMaxNumLimit: 'zip下载数量限制',
    zipMaxSizeLimit: 'zip下载大小限制(B)',
    current: '当前值',
    noLimit: '无限制',
    userDefaultSizeLimit: '用户默认总大小限制(B) ',
    matterBinDefaultSaveDay: '回收站默认保留天数',
    enterMatterBinDefaultSaveDay: '默认回收站默认保留天数必填!',
    docLink: '文档链接',
    tankDocLink: 'https://tank-doc.eyeblue.cn/zh',
    allowRegister: '允许自主注册',
    systemCleanup: '重置系统',
    systemCleanupDescription: '重置系统将清空除管理员账号外所有数据',
    systemCleanupPrompt:
      '重置系统将清空除管理员账号外所有数据，事关重大，请输入登录密码',
    previewConfig: '文件预览配置',
    editPreference: '设置网站偏好',
    editPreviewEngine: '设置预览引擎',
    enterWebsiteName: '请输入网站名称!',
    enterZipMaxNumLimit: 'zip最大数量限制必填!',
    enterZipMaxSizeLimit: 'zip大小限制必填!',
    enterUserDefaultSizeLimit: '默认用户空间大小必填!',
    engine: '{}号预览引擎',
    noEngine: '暂无在线预览引擎配置',
    newEngine: '添加一个预览引擎',
    engineReg: '引擎格式',
    engineSuffix: '匹配后缀',
    enginePreview: '预览方式',
    defaultPreview: '默认引擎',
    previewEngine: '{}号引擎',
    defaultPreviewDesc: '默认预览引擎，不可移除',
    engineRegHelper:
      '此处填写模板语法：{url}表示文件路径，预览时会自动替换成对应的文件url；{b64url}表示base64机密后的路径，适用于kkfileview；',
    engineUsageHint:
      '对于一个文件的预览，使用第一个匹配到后缀名的引擎，没有配匹到则使用系统默认预览引擎',
    engineRegPlaceHolder: '例如：https://xxx.xxx.xxx?url={url}',
    engineSuffixPlaceHolder:
      '输入后缀，使用逗号分隔，不用带. 例如：doc,ppt,xls',
    previewCurrent: '本站预览',
    previewOpen: '新标签打开',
    editScan: '设置磁盘扫描',
    enableScan: '开启磁盘扫描',
    disabledScan: '暂未开启磁盘扫描',
    scanCron: '定时扫描',
    cron: 'cron表达式',
    cronValidate: 'cron表达式不能为空',
    scanScope: '扫描范围',
    scanUsers: '扫描用户',
    scanPerTenSeconds: '每十秒',
    scanPerThirtySeconds: '每三十秒',
    scanPerMinute: '每分钟',
    scanPerHour: '每小时',
    scanCustom: '自定义',
    chooseUsers: '模糊搜索用户',
    chooseUsersValidate: '请选择至少一个用户',
    scanLoading: '扫描中，请稍后...',
    matterBinDefaultTip: '设置0表示关闭回收站功能',
  },
  share: {
    shareDetail: '分享详情',
    shareTime: '分享时间',
    expireTime: '失效时间',
    noExpire: '永久有效',
    expired: '已过期',
    copyLinkAndCode: '复制链接+提取码',
    shareSuccess: '分享成功',
    sharer: '分享者',
    link: '链接',
    copyLink: '复制链接',
    code: '提取码',
    copyCode: '复制提取码',
    copySuccess: '复制成功',
    more: '更多',
    cancelShare: '取消分享',
    getLink: '获取链接',
    allFiles: '全部文件',
    noContent: '该目录下暂无任何内容',
    enterCode: '请输入提取码',
    getFiles: '提取文件',
    codeError: '提取码错误',
    cancelPrompt: '此操作将永久取消该分享, 是否继续?',
    hour: '1小时',
    day: '1天',
    week: '1周',
    month: '1个月',
    year: '1年',
    infinity: '永远有效',
    emptyHint: '暂无任何分享',
  },
  user: {
    redirecting: '正在转跳...',
    oldPassword: '旧密码',
    newPassword: '新密码',
    confirmNewPassword: '确认新密码',
    cannotBeNull: '不能为空！',
    passwordNotSame: '两次输入不一致！',
    role: '角色',
    singleFileSizeLimit: '单文件限制',
    totalFileSizeLimit: '空间限制',
    current: '当前值',
    noLimit: '无限制',
    totalFileSize: '已使用空间',
    status: '状态',
    lastLogin: '上次登录',
    lastLoginIp: '上次登录IP',
    lastLoginTime: '上次登录时间',
    resetPassword: '重置密码',
    transfiguration: '变身',
    changePassword: '修改密码',
    enterPassword: '输入密码',
    enterUsername: '请输入用户名',
    enterNewPassword: '请输入新密码',
    profile: '个人详情',
    avatar: '头像',
    username: '用户名',
    password: '密码',
    confirmPassword: '确认密码',
    disabled: '已禁用',
    disableUser: '禁用该用户',
    activeUser: '激活该用户',
    deleteUser: '删除该用户',
    deleteHint:
      '此操作将删除用户【{}】的所有记录，包括文件，分享，用户信息等内容，确定继续？',
    disable: '禁用',
    sync: '同步',
    active: '激活',
    welcomeLogin: '欢迎登录',
    logining: '正在登录...',
    login: '登录',
    loginSuccess: '登录成功',
    toToRegister: '立即注册',
    welcomeRegister: '欢迎注册',
    registering: '正在登录...',
    register: '注册',
    goToLogin: '前往登录',
    roleGuest: '游客',
    roleUser: '注册用户',
    roleUserRoleSpace: '用户空间角色',
    roleAdministrator: '管理员',
    statusActive: '正常',
    statusDisabled: '禁用',
    webdavLink: 'WebDAV 地址',
    docLink: '文档链接',
    createUser: '创建用户',
    editUser: '编辑用户',
    editSomebodyPassword: '修改{}的密码',
    transfigurationPromptText: '变身提示',
    transfigurationPrompt:
      '您将使用该用户的身份登录。请复制以下链接到其他浏览器访问，在当前浏览器访问会导致当前用户登录信息失效。',
    allUsers: '全部用户',
    partialUsers: '局部用户',
    searchUser: '搜索用户',
  },
  space: {
    name: '共享空间',
    nameTip: '请输入空间名称，不可修改',
    create: '创建空间',
    totalSize: '已使用',
    sizeLimit: '单文件限制',
    sizeLimitTip: '请输入单文件大小限制',
    totalSizeLimit: '总大小限制',
    totalSizeLimitTip: '请输入总大小限制',
    deleteHint:
      '此操作将永久删除该空间, 请先删除空间所有文件和空间成员, 是否继续?',
  },
  model: {
    usernameRule: '用户名只能包含字母，数字和"_"',
    passwordRule: '密码长度至少为6位',
    linkCodeText: '链接:{} 提取码:{}',
    copyLinkCodeSuccess: '复制链接提取码成功',
  },
  plugin: {
    cannotPreview: '无法预览',
    emptyHintDefault: '没有符合条件的项目',
    everyPage: '每页',
    items: '条',
    total: '共',
    clickRefresh: '点击刷新',
  },
  loading: '加载中',
  selectAll: '全选',
  edit: '修改',
  createTime: '创建时间',
  download: '下载',
  close: '关闭',
  required: '必填',
  cancel: '取消',
  delete: '删除',
  deleteDirectly: '直接删除',
  actionCanNotRevertConfirm: '此操作不可撤回, 是否继续?',
  actionDeleteConfirm: '确定删除吗?',
  actionRecoveryConfirm: '确定恢复吗?',
  prompt: '提示',
  confirm: '确定',
  copy: '复制',
  copySuccess: '复制成功！',
  copyError: '复制失败！',
  showMore: '显示更多',
  username: '用户名',
  password: '密码',
  submit: '提交',
  save: '保存',
  create: '创建',
  finish: '完成',
  operationSuccess: '操作成功',
  operation: '操作',
  notFound: '404 页面找不到',
  login: '登录',
  logout: '退出',
  yes: '是',
  no: '否',
  all: '所有',
  refresh: '刷新',
  inputRequired: '该项必填',
};

export default LangZh;
