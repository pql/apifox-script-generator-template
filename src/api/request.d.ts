
/**
 * @description 获取版本详情 buildReqGetOrPostTyped
 * @url /admin/app/version/detail
 */
export interface IAdminAppVersionDetailGet{
	id: number;
}

/**
 * @description 删除版本 buildReqGetOrPostTyped
 * @url /admin/app/version/{id}
 */
export interface IAdminAppVersionIdDelete{
}

/**
 * @description 获取版本列表 buildReqGetOrPostTyped
 * @url /admin/app/version/list
 */
export interface IAdminAppVersionListGet{
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 获取版本号 buildReqGetOrPostTyped
 * @url /admin/app/version/name
 */
export interface IAdminAppVersionNameGet{
	url: string; // 地址
}

/**
 * @description 添加版本 buildReqGetOrPostTyped
 * @url /admin/app/version
 */
export interface IAdminAppVersionPost{
	content?: string; // 更新描述
	isForce?: number; // 是否强制更新 1-强制 0-不强制
	name?: string; // 标题描述
	url: string; // app地址
}

/**
 * @description 修改版本 buildReqGetOrPostTyped
 * @url /admin/app/version
 */
export interface IAdminAppVersionPut{
	content?: string; // 更新描述
	id: number; // ID
	isForce?: number; // 是否强制更新 1-强制 0-不强制
	name?: string; // 标题描述
	url: string; // app地址
}

/**
 * @description 获取渠道详情 buildReqGetOrPostTyped
 * @url /admin/channel/{id}
 */
export interface IAdminChannelIdGet{
}

/**
 * @description 获取渠道列表 buildReqGetOrPostTyped
 * @url /admin/channel/list
 */
export interface IAdminChannelListGet{
	keyword?: string;
}

/**
 * @description 添加渠道 buildReqGetOrPostTyped
 * @url /admin/channel
 */
export interface IAdminChannelPost{
	avatar?: string;
	brokerageList?: any[]; // 佣金阶梯
	channelName: string;
	password: string;
	phone: string;
	remark?: string;
	status: number; // 状态  0-正常 1-停用
}

/**
 * @description 编辑渠道 buildReqGetOrPostTyped
 * @url /admin/channel
 */
export interface IAdminChannelPut{
	avatar?: string;
	brokerageList?: any[]; // 佣金阶梯
	channelName: string;
	id: number;
	phone: string;
	remark?: string;
	status: number; // 状态  0-正常 1-停用
}

/**
 * @description 重置密码 buildReqGetOrPostTyped
 * @url /admin/channel/resetPassword
 */
export interface IAdminChannelResetPasswordPut{
	id: number; // 渠道ID
	password: string; // 密码
}

/**
 * @description 生成图形验证码 buildReqGetOrPostTyped
 * @url /admin/common/captchaImage
 */
export interface IAdminCommonCaptchaImageGet{
}

/**
 * @description 通过父id获取下级列表 buildReqGetOrPostTyped
 * @url /admin/common/country/children/{parentId}
 */
export interface IAdminCommonCountryChildrenParentIdGet{
}

/**
 * @description 获取所有国家 buildReqGetOrPostTyped
 * @url /admin/common/country/list
 */
export interface IAdminCommonCountryListGet{
	chName?: string;
}

/**
 * @description 获取来源统计数据 buildReqGetOrPostTyped
 * @url /admin/console/chart/origin
 */
export interface IAdminConsoleChartOriginGet{
}

/**
 * @description 获取公海日期统计数据 buildReqGetOrPostTyped
 * @url /admin/console/chart/seaDay
 */
export interface IAdminConsoleChartSeaDayGet{
}

/**
 * @description 获取公海统计数据 buildReqGetOrPostTyped
 * @url /admin/console/chart/sea
 */
export interface IAdminConsoleChartSeaGet{
	followStatus?: number;
	city?: string;
	province?: string;
}

/**
 * @description 获取签单排行榜 buildReqGetOrPostTyped
 * @url /admin/console/conclude/rank/{type}
 */
export interface IAdminConsoleConcludeRankTypeGet{
}

/**
 * @description 获取控制台统计信息 buildReqGetOrPostTyped
 * @url /admin/console/statistics/info
 */
export interface IAdminConsoleStatisticsInfoGet{
}

/**
 * @description 设置合同 buildReqGetOrPostTyped
 * @url /admin/contract/attrRef
 */
export interface IAdminContractAttrRefPost{
	attrRef: any; // 合同坐标组件配置信息
	id: string; // 合同ID
}

/**
 * @description 删除合同 buildReqGetOrPostTyped
 * @url /admin/contract/{id}
 */
export interface IAdminContractIdDelete{
}

/**
 * @description 合同详情 buildReqGetOrPostTyped
 * @url /admin/contract/{id}
 */
export interface IAdminContractIdGet{
}

/**
 * @description 合同列表 buildReqGetOrPostTyped
 * @url /admin/contract/list
 */
export interface IAdminContractListGet{
	contractNo?: string; // 合同编号
	title?: string; // 合同标题
	createById?: number; // 创建人
	createTimeStart?: string; // 开始时间
	createTimeEnd?: string; // 结束时间
	flowId?: number; // 流程ID
}

/**
 * @description 新增合同 buildReqGetOrPostTyped
 * @url /admin/contract
 */
export interface IAdminContractPost{
	remark?: string; // 备注信息
	title: string; // 合同标题
	url: string; // 合同文件地址
}

/**
 * @description 编辑合同 buildReqGetOrPostTyped
 * @url /admin/contract
 */
export interface IAdminContractPut{
	id: number; // 合同ID
	remark: string; // 备注信息
	title: string; // 合同标题
	url: string; // 合同文件地址
}

/**
 * @description 删除账户 buildReqGetOrPostTyped
 * @url /admin/corporate/account/{id}
 */
export interface IAdminCorporateAccountIdDelete{
}

/**
 * @description 账户详情 buildReqGetOrPostTyped
 * @url /admin/corporate/account/{id}
 */
export interface IAdminCorporateAccountIdGet{
}

/**
 * @description 账户列表 buildReqGetOrPostTyped
 * @url /admin/corporate/account/list
 */
export interface IAdminCorporateAccountListGet{
	status?: number; // 状态 0-正常 1-禁用
	type?: string; // 类型 bank-银行 wechat-微信 alipay-支付宝
	pageSize?: number;
	pageNum?: number;
}

/**
 * @description 添加账户 buildReqGetOrPostTyped
 * @url /admin/corporate/account
 */
export interface IAdminCorporateAccountPost{
	bankName: string; // 开户行
	bankNumber: string; // 开户账号
	bankUserName: string; // 开户户名
	remark?: string;
	status: number; // 状态 0-正常 1-禁用
	type: string; // 类型 bank-银行 wechat-微信 alipay-支付宝
}

/**
 * @description 编辑账户 buildReqGetOrPostTyped
 * @url /admin/corporate/account
 */
export interface IAdminCorporateAccountPut{
	bankName: string; // 开户行
	bankNumber: string; // 开户账号
	bankUserName: string; // 开户户名
	id: number;
	remark?: string;
	status: number; // 状态 0-正常 1-禁用
}

/**
 * @description 优惠券详情 buildReqGetOrPostTyped
 * @url /admin/coupon/{id}
 */
export interface IAdminCouponIdGet{
}

/**
 * @description 优惠券投资者列表 buildReqGetOrPostTyped
 * @url /admin/coupon/investor/list
 */
export interface IAdminCouponInvestorListGet{
	pageNum?: number;
	pageSize?: number;
	investorNo?: string;
	investorName?: string;
	couponId?: number;
}

/**
 * @description 优惠券列表 buildReqGetOrPostTyped
 * @url /admin/coupon/list
 */
export interface IAdminCouponListGet{
	title?: string;
	pageNum?: string;
	pageSize?: string;
}

/**
 * @description 新增优惠券 buildReqGetOrPostTyped
 * @url /admin/coupon
 */
export interface IAdminCouponPost{
	category?: string; // 类别 PLATFORM:平台 OTHER:其他
	title?: string; // 标题
	quantity?: number; // 总数量
	desc?: string; // 描述
	imgCover?: string; // 封面
	couponType?: number; // 类型 -1-未知 0-预定费 1-咨询费 2-律师费
	amount?: number; // 金额
	currency?: string; // 币种类型
}

/**
 * @description 编辑优惠券 buildReqGetOrPostTyped
 * @url /admin/coupon
 */
export interface IAdminCouponPut{
	title?: string; // 标题
	quantity?: number; // 总数量
	desc?: string; // 描述
	imgCover?: string; // 封面
	id?: number; // ID
	amount?: number; // 金额
	currency?: string; // 币种类型
}

/**
 * @description 优惠券发送投资者 buildReqGetOrPostTyped
 * @url /admin/coupon/send/investor
 */
export interface IAdminCouponSendInvestorPost{
	couponId: number;
	investorNos: any[];
}

/**
 * @description 优惠券核销 buildReqGetOrPostTyped
 * @url /admin/coupon/writeoff
 */
export interface IAdminCouponWriteoffPost{
	id?: string; // ID
}

/**
 * @description 关联订单 buildReqGetOrPostTyped
 * @url /admin/deposit/investor/order/list
 */
export interface IAdminDepositInvestorOrderListGet{
	investorNo?: string; // 投资者编号
}

/**
 * @description 查询充值列表 buildReqGetOrPostTyped
 * @url /admin/deposit/list
 */
export interface IAdminDepositListGet{
	beginTime?: string; // 发起开始时间 yyyy-MM-dd HH:mm:ss
	depositNo?: string; // 充值编号
	endTime?: string; // 发起结束时间 yyyy-MM-dd HH:mm:ss
	maxAmount?: number; // 充值金额最大值
	minAmount?: number; // 充值金额最小值
	investorEmail?: string; // 用户邮箱
	investorName?: any[]; // 用户名称
	investorPhone?: string; // 用户手机
	pageNum?: number; // 当前页数
	pageSize?: number; // 每页数量
	createById?: number; // 操作人id
	investorNo?: string; // 用户编号
	orderNo?: string; // 订单编号
}

/**
 * @description 充值 手动入金 buildReqGetOrPostTyped
 * @url /admin/deposit
 */
export interface IAdminDepositPost{
	amount: number; // 金额
	investorId: number; // 用户id
	orderNo: string; // 订单编号
	remark: string; // 备注
}

/**
 * @description 获取部门分配规则 buildReqGetOrPostTyped
 * @url /admin/dept/allocation/rule
 */
export interface IAdminDeptAllocationRuleGet{
	deptId: number; // 部门ID
}

/**
 * @description 添加/编辑部门分配规则 buildReqGetOrPostTyped
 * @url /admin/dept/allocation/rule
 */
export interface IAdminDeptAllocationRulePost{
	allocationStatus: number; // 分配状态 0-手动 1-自动
	autoAllocation?: number; // 自动分配 0-按员工ID 1-安权重
	autoSwitch?: number; // 自动规则开关 0-关闭 1-打开
	autoTimeRule?: any[];
	autoWeekRule?: any[]; // 自动规则时间-周
	choiceUserType?: number; // 选择员工类型 0-全部 1-自定义
	deptId: string; //  部门ID
	deptUsers?: any[]; // 员工列表
	msgNotify?: number; // 消息提醒 0-不提醒 1-提醒
}

/**
 * @description 删除部门 buildReqGetOrPostTyped
 * @url /admin/dept/{id}
 */
export interface IAdminDeptIdDelete{
}

/**
 * @description 查询部门详情 buildReqGetOrPostTyped
 * @url /admin/dept/{id}
 */
export interface IAdminDeptIdGet{
}

/**
 * @description 查询部门列表 buildReqGetOrPostTyped
 * @url /admin/dept/list
 */
export interface IAdminDeptListGet{
	keyword?: string;
	pageSize?: number;
	pageNum?: number;
}

/**
 * @description 新增部门 buildReqGetOrPostTyped
 * @url /admin/dept
 */
export interface IAdminDeptPost{
	leaders?: any[]; // 负责人ids
	name: string; // 部门名称
	users?: any[]; // 员工ids
}

/**
 * @description 编辑部门 buildReqGetOrPostTyped
 * @url /admin/dept
 */
export interface IAdminDeptPut{
	id: number; // 部门ID
	leaders?: any[];
	name: string; // 部门名称
}

/**
 * @description 克隆流程 buildReqGetOrPostTyped
 * @url /admin/flow/clone
 */
export interface IAdminFlowClonePost{
	flowId: number; // 流程ID
}

/**
 * @description 删除流程 buildReqGetOrPostTyped
 * @url /admin/flow/{id}
 */
export interface IAdminFlowIdDelete{
}

/**
 * @description 流程详情 buildReqGetOrPostTyped
 * @url /admin/flow/{id}
 */
export interface IAdminFlowIdGet{
}

/**
 * @description 流程列表 buildReqGetOrPostTyped
 * @url /admin/flow/list
 */
export interface IAdminFlowListGet{
	title?: string; // 搜索条件
	createStartTime?: string;
	createEndTime?: string;
	updateStartTime?: string;
	updateEndTime?: string;
	pageNum?: number;
	pageSize?: number;
	contractId?: number; // 合同ID
}

/**
 * @description 新增模版 buildReqGetOrPostTyped
 * @url /admin/flow
 */
export interface IAdminFlowPost{
	content: any[];
	title: string;
	type: string;
}

/**
 * @description 编辑模版 buildReqGetOrPostTyped
 * @url /admin/flow
 */
export interface IAdminFlowPut{
	id: number;
	updateType: string; // 修改类型 status, title, content
	updateValue: string | number | boolean | any[] | any | null;
}

/**
 * @description 基金详情 buildReqGetOrPostTyped
 * @url /admin/fund/{id}
 */
export interface IAdminFundIdGet{
}

/**
 * @description 基金列表 buildReqGetOrPostTyped
 * @url /admin/fund/list
 */
export interface IAdminFundListGet{
	title?: string; // 基金标题
	productId?: number; // 产品ID
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 新增基金 buildReqGetOrPostTyped
 * @url /admin/fund
 */
export interface IAdminFundPost{
	title?: string; // 标题
	type?: string; // 基金类型
	establishTime?: string; // 成立时间
	scale?: string; // 基金规模
	manager?: string; // 基金管理人
}

/**
 * @description 编辑基金 buildReqGetOrPostTyped
 * @url /admin/fund
 */
export interface IAdminFundPut{
	title?: string; // 标题
	type?: string; // 基金类型
	establishTime?: string; // 成立时间
	scale?: string; // 基金规模
	manager?: string; // 基金管理人
	id?: string; // 主键ID
}

/**
 * @description 基金类型列表 buildReqGetOrPostTyped
 * @url /admin/fund/type/list
 */
export interface IAdminFundTypeListGet{
}

/**
 * @description 获取用户信息 buildReqGetOrPostTyped
 * @url /admin/info
 */
export interface IAdminInfoGet{
}

/**
 * @description 获取邀请的用户 buildReqGetOrPostTyped
 * @url /admin/investor/invitee/list
 */
export interface IAdminInvestorInviteeListGet{
	id: number; // 投资者ID
	pageNum?: number; // 页码
	pageSize?: number; // 条数
}

/**
 * @description 获取投资者列表 buildReqGetOrPostTyped
 * @url /admin/investor/list
 */
export interface IAdminInvestorListGet{
	pageNum?: number; // 当前页数
	pageSize?: number; // 每页数量
	createTimeEnd?: string; // join date end
	createTimeStart?: string; // join date start
	email?: string; // 用户邮箱
	investorNo?: string;
	lastLoginDateStart?: string;
	lastLoginDateEnd?: string;
	type?: number; // 投资者类型  3-Reg S 4-Reg D
	name?: string; // 姓名
	invEmail?: string; // 邀请人
	productId?: number; // 产品ID
}

/**
 * @description 获取投资者订单列表 buildReqGetOrPostTyped
 * @url /admin/investor/order/list
 */
export interface IAdminInvestorOrderListGet{
	investorId?: number; // 投资者ID
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 获取投资者已有的权限 buildReqGetOrPostTyped
 * @url /admin/investor/product/relevant/list
 */
export interface IAdminInvestorProductRelevantListGet{
	investorId?: number;
	type?: string; // 固定值 file
	productId?: number;
	pageSize?: number;
	pageNum?: number;
}

/**
 * @description 分配投资者权限 buildReqGetOrPostTyped
 * @url /admin/investor/product/relevant
 */
export interface IAdminInvestorProductRelevantPost{
	investorId: number; // 投资人ID
	levelId: number; // 等级ID
	productId: number; // 产品ID
	type: string; // 类型 固定值 file 或者 video
}

/**
 * @description 新增投资者 buildReqGetOrPostTyped
 * @url /admin/investor/record/add
 */
export interface IAdminInvestorRecordAddPost{
	alienNumber?: string; // 侨民号码 即绿卡上的号码
	avatar?: string; // 图像
	birthday?: string; // 出生日期
	city?: string; // 城市
	country?: string; // 国家
	currentAddress?: string; // 当前地址
	demoAccount?: string; // 0-非演示账号 1-演示账号
	email: string; // 邮箱
	firstName: string;
	gender?: number; // 性别 0-male 1-female 2-unknown
	lastName: string;
	middleName?: string;
	overseasAddress?: string; // 海外地址
	phone?: string; // 手机号
	phoneAreaCode?: string; // 手机区号
	province?: string; // 洲/省
	remark?: string; // 备注
	ssn?: string; // 社会安全号码
	type?: number; // 投资者类型 0-未选择合格投资者 1-非合格投资者 2-合格投资者 3-Reg S 4-Reg D
	zipCode?: string; // 邮政编码
}

/**
 * @description 获取投资者基本信息 buildReqGetOrPostTyped
 * @url /admin/investor/record/basic
 */
export interface IAdminInvestorRecordBasicGet{
	id?: number; // 投资者ID
}

/**
 * @description 更新投资者基本信息 buildReqGetOrPostTyped
 * @url /admin/investor/record/update
 */
export interface IAdminInvestorRecordUpdatePut{
	alienNumber?: string; // 侨民号码 即绿卡上的号码
	avatar?: string; // profile photo
	birthday?: number; // 出生日期
	city?: string; // 城市
	country?: string; // 国家
	currentAddress?: string; // 当前地址
	demoAccount?: number; // 0-非演示账号 1-演示账号
	firstName?: string; // 名 微信返回的nickname保存至此字段
	gender?: number; // 性别,0:male;1:female,2:unknow
	id?: number; // UID
	lastName?: string; // 姓
	middleName?: string; // 中名
	orderNum?: number; // 可下单数量
	overseasAddress?: string; // 海外地址
	privacyStatus?: number; // 隐私开关 0-关闭 1-开启
	province?: string; // 洲/省
	regType?: number; // 投资者类型 0-未选择合格投资者  3-Reg S 4-Reg D
	remark?: string; // 备注
	ssn?: string; // 社会安全号码
	status?: number; // 0-正常 1-停用
	twoFaStatus?: number; // 两步验证状态 0-关闭 1-开启
	zipCode?: string; // 邮政编码
}

/**
 * @description 重发密码文件 buildReqGetOrPostTyped
 * @url /admin/investor/repeatPwdEmail
 */
export interface IAdminInvestorRepeatPwdEmailPost{
	id: string; // id
}

/**
 * @description 投资者token buildReqGetOrPostTyped
 * @url /admin/investor/token
 */
export interface IAdminInvestorTokenPost{
	investorId: number; // 投资者ID
}

/**
 * @description 获取投资者银行信息 buildReqGetOrPostTyped
 * @url /admin/investor/wallet/bank/account
 */
export interface IAdminInvestorWalletBankAccountGet{
	investorId?: number; // 投资者ID
}

/**
 * @description 保存投资者银行卡信息 buildReqGetOrPostTyped
 * @url /admin/investor/wallet/bank/account
 */
export interface IAdminInvestorWalletBankAccountPost{
	investorId: number; // 投资者id
	bankNumber: string; // 银行卡号
	bankName: string; // 开户行
	bankUserName: string; // 开户户名
}

/**
 * @description 获取投资者投资记录 buildReqGetOrPostTyped
 * @url /admin/investor/wallet/deposit/list
 */
export interface IAdminInvestorWalletDepositListGet{
	investorId: number;
	pageSize?: number;
	pageNum?: number;
	depositNo?: string; // 流水号
}

/**
 * @description 获取投资者资产详情 buildReqGetOrPostTyped
 * @url /admin/investor/wallet/info/{id}
 */
export interface IAdminInvestorWalletInfoIdGet{
}

/**
 * @description 获取投资者订单支付记录 buildReqGetOrPostTyped
 * @url /admin/investor/wallet/orderpay/list
 */
export interface IAdminInvestorWalletOrderpayListGet{
	investorId: number;
	pageNum?: number;
	pageSize?: number;
	payNo?: string; // 流水号
}

/**
 * @description 获取投资者反俑记录 buildReqGetOrPostTyped
 * @url /admin/investor/wallet/rebate/list
 */
export interface IAdminInvestorWalletRebateListGet{
	investorId: number;
	pageNum?: number;
	pageSize?: number;
	rebateNo?: string; // 流水号
}

/**
 * @description 规则详情 buildReqGetOrPostTyped
 * @url /admin/invitation/rule
 */
export interface IAdminInvitationRuleGet{
}

/**
 * @description 添加规则 buildReqGetOrPostTyped
 * @url /admin/invitation/rule
 */
export interface IAdminInvitationRulePost{
	content: string; // 规则内容
}

/**
 * @description 登录 buildReqGetOrPostTyped
 * @url /admin/login
 */
export interface IAdminLoginPost{
	code?: string; // 图形验证码
	loginName?: string; // 登录用户名
	password?: string; // 密码
	uuid?: string; // 唯一标识
}

/**
 * @description 素材查重 buildReqGetOrPostTyped
 * @url /admin/material/exist
 */
export interface IAdminMaterialExistGet{
	hash: string; // false 为不存在，如果存在返回已经存在的文件信息
}

/**
 * @description 删除素材 buildReqGetOrPostTyped
 * @url /admin/material/{id}
 */
export interface IAdminMaterialIdDelete{
}

/**
 * @description 素材列表 buildReqGetOrPostTyped
 * @url /admin/material/list
 */
export interface IAdminMaterialListGet{
	pageSize?: number;
	pageNum?: number;
	name?: string;
	type?: any[]; //  0: 'img',  1: 'pdf',  2: 'video',  3: 'html',  4: 'txt',  5: 'ppt',  6: 'xls',  7: 'doc',  8: 'zip',  9: 'file'
	tagId?: number; // 标签ID
}

/**
 * @description 修改素材 buildReqGetOrPostTyped
 * @url /admin/material
 */
export interface IAdminMaterialPut{
	id: number; // 素材ID
	name: string; // 素材名称
	tagIds?: any[]; // 标签ids
}

/**
 * @description 恢复素材 buildReqGetOrPostTyped
 * @url /admin/material/recover
 */
export interface IAdminMaterialRecoverPost{
	id: number; // 素材ID
}

/**
 * @description 素材列表-已删除的 buildReqGetOrPostTyped
 * @url /admin/material/recycle/list
 */
export interface IAdminMaterialRecycleListGet{
	pageSize?: number;
	pageNum?: number;
	name?: string;
	type?: number; //  0: 'img',  1: 'pdf',  2: 'video',  3: 'html',  4: 'txt',  5: 'ppt',  6: 'xls',  7: 'doc',  8: 'zip',  9: 'file'
	tagId?: number; // 标签ID
}

/**
 * @description 删除标签 buildReqGetOrPostTyped
 * @url /admin/material/tag/{id}
 */
export interface IAdminMaterialTagIdDelete{
}

/**
 * @description 查询标签列表-全部 buildReqGetOrPostTyped
 * @url /admin/material/tag/list/all
 */
export interface IAdminMaterialTagListAllGet{
	name?: string;
}

/**
 * @description 查询标签列表 buildReqGetOrPostTyped
 * @url /admin/material/tag/list
 */
export interface IAdminMaterialTagListGet{
	name?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 添加标签 buildReqGetOrPostTyped
 * @url /admin/material/tag
 */
export interface IAdminMaterialTagPost{
	name: string;
}

/**
 * @description 编辑标签 buildReqGetOrPostTyped
 * @url /admin/material/tag
 */
export interface IAdminMaterialTagPut{
	id: number;
	name: string;
}

/**
 * @description 上传素材 buildReqFileTyped
 * @url /admin/material/upload
 */
export interface IAdminMaterialUploadPostFormData extends FormData{
	append: (name: 'files' | 'name' | 'type' | 'size' | 'width' | 'height' | 'tagIds' | 'hash', value: string | Blob, fileName?: string) => void;
}

/**
 * @description 查询菜单列表 buildReqGetOrPostTyped
 * @url /admin/menu/list
 */
export interface IAdminMenuListGet{
	menuType?: string; // C-菜单 F-接口
}

/**
 * @description 删除菜单 buildReqGetOrPostTyped
 * @url /admin/menu/{menuId}
 */
export interface IAdminMenuMenuIdDelete{
}

/**
 * @description 查询菜单详情 buildReqGetOrPostTyped
 * @url /admin/menu/{menuId}
 */
export interface IAdminMenuMenuIdGet{
}

/**
 * @description 新增菜单 buildReqGetOrPostTyped
 * @url /admin/menu
 */
export interface IAdminMenuPost{
	frame?: number; // 是否外链 0-否 1-是
	menuId?: number; // 菜单id
	menuName?: string; // 菜单名称
	menuType?: string; // 菜单类型 M-目录 C-菜单 F-接口
	orderNum?: number; // 排序
	parentId?: number; // 父菜单id 根目录=0
	path?: string; // 地址
	perms?: string; // 权限字符串
	status?: number; // 菜单状态 0-正常 1-停用
	visible?: number; // 显示状态 0-显示 1-隐藏
}

/**
 * @description 修改菜单 buildReqGetOrPostTyped
 * @url /admin/menu
 */
export interface IAdminMenuPut{
	frame?: number; // 是否外链 0-否 1-是
	menuId?: number; // 菜单id
	menuName?: string; // 菜单名称
	menuType?: string; // 菜单类型 M-目录 C-菜单 F-接口
	orderNum?: number; // 排序
	parentId?: number; // 父菜单id 根目录=0
	path?: string; // 地址
	perms?: string; // 权限字符串
	status?: number; // 菜单状态 0-正常 1-停用
	visible?: number; // 显示状态 0-显示 1-隐藏
}

/**
 * @description 获取菜单信息 buildReqGetOrPostTyped
 * @url /admin/menus
 */
export interface IAdminMenusGet{
}

/**
 * @description 删除通知 buildReqGetOrPostTyped
 * @url /admin/notification/{id}
 */
export interface IAdminNotificationIdDelete{
}

/**
 * @description 查询通知详情 buildReqGetOrPostTyped
 * @url /admin/notification/{id}
 */
export interface IAdminNotificationIdGet{
}

/**
 * @description 查询通知列表 buildReqGetOrPostTyped
 * @url /admin/notification/list
 */
export interface IAdminNotificationListGet{
	secondCategory?: string; // 通知类型 二级类型 SYS:系统更新  ANN:公告
	title?: string;
	createById?: number;
	publishTimeStart?: string;
	publishTimeEnd?: string;
}

/**
 * @description 新增通知 buildReqGetOrPostTyped
 * @url /admin/notification
 */
export interface IAdminNotificationPost{
	secondCategory?: string; // 二级类型 SYS:系统更新  ANN:公告
	title?: string;
	publishTime?: string;
	content?: string;
}

/**
 * @description 修改订单基本信息 buildReqGetOrPostTyped
 * @url /admin/order/basic/info
 */
export interface IAdminOrderBasicInfoPut{
	applyUserName?: string; // 申请人姓名
	orderId: number; // 订单ID
	receiptNumber?: string; // 回执单
}

/**
 * @description 绑定中介 buildReqGetOrPostTyped
 * @url /admin/order/broker/bind
 */
export interface IAdminOrderBrokerBindPost{
	brokerId?: number; // 中介id
	orderId?: number; // 订单id
}

/**
 * @description 查询订单中介列表 buildReqGetOrPostTyped
 * @url /admin/order/broker/list
 */
export interface IAdminOrderBrokerListGet{
	orderId: number; // 订单id
	status: number; // 0-当前 1-历史
}

/**
 * @description 取消订单 buildReqGetOrPostTyped
 * @url /admin/order/cancel
 */
export interface IAdminOrderCancelPost{
	orderId?: number; // 订单id
}

/**
 * @description 绑定文案 buildReqGetOrPostTyped
 * @url /admin/order/copywriting/bind
 */
export interface IAdminOrderCopywritingBindPost{
	copywritingId?: number; // 文案id
	orderId?: number; // 订单id
}

/**
 * @description 查询订单文案列表 buildReqGetOrPostTyped
 * @url /admin/order/copywriting/list
 */
export interface IAdminOrderCopywritingListGet{
	orderId: number; // 订单id
	status: number; // 0-当前 1-历史
}

/**
 * @description 创建订单 buildReqGetOrPostTyped
 * @url /admin/order/create
 */
export interface IAdminOrderCreatePost{
	investorId: number; // 投资人ID
	productType: string; // 产品类型  'EB-5','EB-1A','NIW'
}

/**
 * @description 绑定客服 buildReqGetOrPostTyped
 * @url /admin/order/customer/bind
 */
export interface IAdminOrderCustomerBindPost{
	customerId?: number; // 客服id
	orderId?: number; // 订单id
}

/**
 * @description 查询订单客服列表 buildReqGetOrPostTyped
 * @url /admin/order/customer/list
 */
export interface IAdminOrderCustomerListGet{
	orderId: number; // 订单id
	status: number; // 0-当前 1-历史
}

/**
 * @description 绑定律师 buildReqGetOrPostTyped
 * @url /admin/order/lawyer/bind
 */
export interface IAdminOrderLawyerBindPost{
	lawyerId?: number; // 律师id
	orderId?: number; // 订单id
}

/**
 * @description 查询订单律师列表 buildReqGetOrPostTyped
 * @url /admin/order/lawyer/list
 */
export interface IAdminOrderLawyerListGet{
	orderId: number; // 订单id
	status: number; // 0-当前 1-历史
}

/**
 * @description 查询订单列表 buildReqGetOrPostTyped
 * @url /admin/order/list
 */
export interface IAdminOrderListGet{
	beginTime?: string; // 签约开始时间 yyyy-MM-dd HH:mm:ss
	endTime?: string; // 签约结束时间 yyyy-MM-dd HH:mm:ss
	orderNo?: string; // 订单编号
	orderStatus?: number; // 订单状态 0-进行重 1-已完成 100-已取消
	pageNum?: number; // 当前页数
	pageSize?: number; // 每页数量
	productId?: number; // 产品id
	type?: string; // 产品类型详见productType枚举 目前有:EB-5
	investorEmail?: string; // 投资者邮箱
	investorName?: string; // 投资者名称
	investorNo?: string; // 投资者编号
}

/**
 * @description 获取订单详情 buildReqGetOrPostTyped
 * @url /admin/order/{orderNo}
 */
export interface IAdminOrderOrderNoGet{
}

/**
 * @description 订单支付记录 buildReqGetOrPostTyped
 * @url /admin/order/pay/list
 */
export interface IAdminOrderPayListGet{
	pageNum?: number; // 页码
	pageSize?: number; // 条数
	payNo?: string; // 流水号
	investorNo?: string; // 投资者编号
	investorEmail?: string; // 投资者邮箱
	investorPhone?: string; // 投资者手机
	investorName?: string; // 投资者名称
	beginTime?: string; // 充值时间
	endTime?: string; // 充值时间
	minAmount?: number; // 充值金额
	maxAmount?: number; // 充值金额
	orderNo?: string; // 订单编号
	createById?: number; // 操作人
}

/**
 * @description 隐藏/显示阶段 buildReqGetOrPostTyped
 * @url /admin/order/phase/status
 */
export interface IAdminOrderPhaseStatusPost{
	phaseId: number; // 阶段ID
	status: number; // 状态 0打开 1关闭
}

/**
 * @description 绑定产品 buildReqGetOrPostTyped
 * @url /admin/order/product/bind
 */
export interface IAdminOrderProductBindPost{
	orderId: string; // 订单ID
	productId: string; // 产品ID
}

/**
 * @description 修改订单 buildReqGetOrPostTyped
 * @url /admin/order/step
 */
export interface IAdminOrderStepPut{
	componentId: number; // 组件ID
	orderId: number; // 订单ID
	orderSubId: number; // 子订单ID
	valueObject: any;
}

/**
 * @description 删除订单组件内容(子订单) buildReqGetOrPostTyped
 * @url /admin/order/sub/content/{componentId}/{orderSubId}
 */
export interface IAdminOrderSubContentComponentIdOrderSubIdDelete{
}

/**
 * @description 添加订单组件内容(子订单) buildReqGetOrPostTyped
 * @url /admin/order/sub/content
 */
export interface IAdminOrderSubContentPost{
	componentId: number; // 组件ID
	orderId: number; // 订单ID
	valueObject: any; // 各组件内容值
}

/**
 * @description 修改订单组件内容(子订单) buildReqGetOrPostTyped
 * @url /admin/order/sub/content
 */
export interface IAdminOrderSubContentPut{
	componentId: number; // 组件ID
	orderId: number; // 订单ID
	orderSubId: number;
	valueObject: any; // 各组件内容值
}

/**
 * @description 修改阶段/组件标题 buildReqGetOrPostTyped
 * @url /admin/order/sub/title
 */
export interface IAdminOrderSubTitlePut{
	bizStatus?: number; // 业务状态 0未开始 1已完成 2进行中
	id: number; // 对应 phaseId，phaseChildId，componentId
	status?: number; // 状态 0打开 1关闭
	title: string; // 标题内容
	type: string; // 对于的类型 'phase','step','component'
}

/**
 * @description 审核订单组件内容(子订单) buildReqGetOrPostTyped
 * @url /admin/order/sub/verify
 */
export interface IAdminOrderSubVerifyPost{
	componentId: number; // 组件ID
	orderId: number; // 订单ID
	orderSubId: number; // 子订单ID
	reason?: string; // 审核不通过原因
	status: number; // 审核状态 1-通过 9-不通过
}

/**
 * @description 钱包内交易（目前只允许操作投资者的项目钱包） buildReqGetOrPostTyped
 * @url /admin/order/transfer/inside
 */
export interface IAdminOrderTransferInsidePost{
	amount?: number; // 交易金额
	sourceAmountType?: string; // 来源资金类型
	targetAmountType?: string; // 目标资金类型
	walletId?: number; // 钱包id
}

/**
 * @description 获取钱包内交易资金类型列表 buildReqGetOrPostTyped
 * @url /admin/order/transfer/inside/type/list
 */
export interface IAdminOrderTransferInsideTypeListGet{
}

/**
 * @description 获取订单投资记录 buildReqGetOrPostTyped
 * @url /admin/order/wallet/deposit/list
 */
export interface IAdminOrderWalletDepositListGet{
	orderNo?: string; // 订单号
	pageNum?: number;
	pageSize?: number;
	depositNo?: string; // 流水号
}

/**
 * @description 获取项目钱包详情 buildReqGetOrPostTyped
 * @url /admin/order/wallet
 */
export interface IAdminOrderWalletGet{
	orderNo: string; // 订单编号
}

/**
 * @description 获取投资者订单支付记录 buildReqGetOrPostTyped
 * @url /admin/order/wallet/orderpay/list
 */
export interface IAdminOrderWalletOrderpayListGet{
	orderNo?: string; // 订单号
	pageNum?: number;
	pageSize?: number;
	payNo?: string; // 流水号
}

/**
 * @description 来源详情 buildReqGetOrPostTyped
 * @url /admin/origin/{id}
 */
export interface IAdminOriginIdGet{
}

/**
 * @description 来源列表 buildReqGetOrPostTyped
 * @url /admin/origin/list
 */
export interface IAdminOriginListGet{
	name?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 添加来源 buildReqGetOrPostTyped
 * @url /admin/origin
 */
export interface IAdminOriginPost{
	name: string; // 名称
	seaCategory: string; // 公海类型 ['baidu', 'meiqia', 'btm',wechat']
	seaId: number; // 公海ID
	status: number; // 状态 0-正常 1-禁用
}

/**
 * @description 编辑来源 buildReqGetOrPostTyped
 * @url /admin/origin
 */
export interface IAdminOriginPut{
	id: number; // ID
	name: string; // 名称
	status: number; // 状态 0-正常 1-禁用
}

/**
 * @description 产品绑定/换绑流程 buildReqGetOrPostTyped
 * @url /admin/product/bind/flow
 */
export interface IAdminProductBindFlowPost{
	productId?: number; // 产品ID
	flowId?: number; // 流程ID
}

/**
 * @description 编辑产品详情内容 buildReqGetOrPostTyped
 * @url /admin/product/content
 */
export interface IAdminProductContentPut{
	content: string; // 产品详情内容
	id: number; // 产品ID
}

/**
 * @description 获取产品下所有流程 buildReqGetOrPostTyped
 * @url /admin/product/flow/alllist
 */
export interface IAdminProductFlowAlllistGet{
	productId?: number; // 产品ID
}

/**
 * @description 获取产品下的流程 buildReqGetOrPostTyped
 * @url /admin/product/flow/list
 */
export interface IAdminProductFlowListGet{
	productId?: number; // 产品ID
}

/**
 * @description 删除产品 buildReqGetOrPostTyped
 * @url /admin/product/{id}
 */
export interface IAdminProductIdDelete{
}

/**
 * @description 获取产品详情 buildReqGetOrPostTyped
 * @url /admin/product/{id}
 */
export interface IAdminProductIdGet{
}

/**
 * @description 查询产品列表 buildReqGetOrPostTyped
 * @url /admin/product/list
 */
export interface IAdminProductListGet{
	type?: string; // 产品类型
	productName?: string; // 产品名称
	flowId?: number; // 绑定流程
	createBy?: string; // 创建人
	pageNum?: number;
	pageSize?: number;
	productId?: number; // 产品ID
	fundId?: number; // 基金ID
}

/**
 * @description 新增产品 buildReqGetOrPostTyped
 * @url /admin/product
 */
export interface IAdminProductPost{
	actualCompletionTime?: string; // 实际竣工时间 yyyy-MM-dd HH:mm:ss
	actualWorkTime?: string; // 实际开工时间 yyyy-MM-dd HH:mm:ss
	address?: string; // 项目位置
	borrowerExtensionNum?: number; // 借款方延期数量
	borrowerExtensionRights?: number; // 借款方延期权 0-否 1-是
	coverImg: string; // 图片链接
	createJobNum?: number; // 创造就业总数
	designer?: string; // 项目设计者
	estimatedCompletionTime?: string; // 预计竣工时间 yyyy-MM-dd HH:mm:ss
	estimatedWorkTime?: string; // 预计开工时间 yyyy-MM-dd HH:mm:ss
	fundCompany?: string; // 发行方公司
	fundId?: number; // 基金ID
	fundStatus?: number; // 发行状态(原资金状态) 1-准备发行 2-募集中 3-募集完毕 4-已经还款和二投 5-投资中 6-二投中 7-准备还款
	id?: number; // id
	immigrantNum?: number; // 移民名额总数
	immigrantStatus: number; // 移民状态 0-暂无状态 1-I-526审批中 2-I-526已批准 3-I-829审批中
	introduction?: string; // 项目介绍
	investYears?: number; // 投资年限
	law: number; // 法律 1新法 0老法
	mobileLinkUrl?: string; // 移动端详情页链接
	pcLinkUrl?: string; // pc详情页链接
	perInvestAmount?: number; // 每份投资额 单位美金
	productName: string; // 产品名称
	progressStatus?: number; // 建设进度状态 1-项目规划中 2-开工准备中 3-地基施工中 4-主体施工中 5-内部施工中 6-已经完工 7-项目出租中 8-项目销售中 9-出租销售完成
	projectStatus?: number; // 项目状态 1-即将开始 2-申购中 3-已过户 4-暂停 5-终止
	raiseAmount: number; // 募集总额
	regionCategory?: string; // 地区类别 1-农业地区 2-高失业地区 3-基建项目 4-一般地区
	sellBeginTime?: string; // 发售开始时间 yyyy-MM-dd HH:mm:ss
	sellEndTime?: string; // 发售结束时间 yyyy-MM-dd HH:mm:ss
	sellNum?: number; // 最大发售额
	sellStatus: number; // 售罄状态 0-未售完 1已售完
	showStatus?: number; // 显示状态 0-正常 1-隐藏
	sort: number; // 排序 升序
	type?: string; // 产品类型详见productType枚举 目前有:EB-5 ，GENERAL
}

/**
 * @description 修改产品 buildReqGetOrPostTyped
 * @url /admin/product
 */
export interface IAdminProductPut{
	actualCompletionTime?: string; // 实际竣工时间 yyyy-MM-dd HH:mm:ss
	actualWorkTime?: string; // 实际开工时间 yyyy-MM-dd HH:mm:ss
	address?: string; // 项目位置
	borrowerExtensionNum?: number; // 借款方延期数量
	borrowerExtensionRights?: number; // 借款方延期权 0-否 1-是
	coverImg: string; // 图片链接
	createJobNum?: number; // 创造就业总数
	designer?: string; // 项目设计者
	estimatedCompletionTime?: string; // 预计竣工时间 yyyy-MM-dd HH:mm:ss
	estimatedWorkTime?: string; // 预计开工时间 yyyy-MM-dd HH:mm:ss
	fundCompany?: string; // 发行方公司
	fundId?: number; // 基金ID
	fundStatus?: number; // 发行状态(原资金状态) 1-准备发行 2-募集中 3-募集完毕 4-已经还款和二投 5-投资中 6-二投中 7-准备还款
	id?: number; // id
	immigrantNum?: number; // 移民名额总数
	immigrantStatus: number; // 移民状态 0-暂无状态 1-I-526审批中 2-I-526已批准 3-I-829审批中
	introduction?: string; // 项目介绍
	investYears?: number; // 投资年限
	law: number; // 法律 1新法 0老法
	mobileLinkUrl?: string; // 移动端详情页链接
	pcLinkUrl?: string; // pc详情页链接
	perInvestAmount?: number; // 每份投资额 单位美金
	productName: string; // 产品名称
	progressStatus?: number; // 建设进度状态 1-项目规划中 2-开工准备中 3-地基施工中 4-主体施工中 5-内部施工中 6-已经完工 7-项目出租中 8-项目销售中 9-出租销售完成
	projectStatus?: number; // 项目状态 1-即将开始 2-申购中 3-已过户 4-暂停 5-终止
	raiseAmount: number; // 募集总额
	regionCategory?: string; // 地区类别 1-农业地区 2-高失业地区 3-基建项目 4-一般地区
	sellBeginTime?: string; // 发售开始时间 yyyy-MM-dd HH:mm:ss
	sellEndTime?: string; // 发售结束时间 yyyy-MM-dd HH:mm:ss
	sellNum?: number; // 最大发售额
	sellStatus: number; // 售罄状态 0-未售完 1已售完
	showStatus?: number; // 显示状态 0-正常 1-隐藏
	sort: number; // 排序 升序
	type?: string; // 产品类型详见productType枚举 目前有:EB-5 ，GENERAL
}

/**
 * @description 查询删除后的产品列表  buildReqGetOrPostTyped
 * @url /admin/product/recycle/list
 */
export interface IAdminProductRecycleListGet{
	type?: string; // 产品类型
	productName?: string; // 产品名称
	flowId?: number; // 绑定流程
	createBy?: string; // 创建人
	pageNum?: number;
	pageSize?: number;
	productId?: number; // 产品ID
	fundId?: number; // 基金ID
	delBy?: string; // 删除人
}

/**
 * @description 申请权限列表 buildReqGetOrPostTyped
 * @url /admin/product/relevant/audit/list
 */
export interface IAdminProductRelevantAuditListGet{
	pageSize?: number;
	pageNum?: number;
	createBy?: string; // 申请人
	productId?: number; // 产品ID
}

/**
 * @description 申请权限审核 buildReqGetOrPostTyped
 * @url /admin/product/relevant/audit
 */
export interface IAdminProductRelevantAuditPost{
	auditReason?: string; // 原因
	id: number; // ID
	status: number; // 状态 0-未处理 1-已处理 2-已拒绝
}

/**
 * @description 查询产品相关内容-文件 buildReqGetOrPostTyped
 * @url /admin/product/relevant/file
 */
export interface IAdminProductRelevantFileGet{
	title?: string;
	productId: number; // 产品ID
}

/**
 * @description 添加产品相关内容-文件 buildReqGetOrPostTyped
 * @url /admin/product/relevant/file
 */
export interface IAdminProductRelevantFilePost{
	data: any[];
	productId: number; // 产品ID
}

/**
 * @description 删除产品文件夹（分组） buildReqGetOrPostTyped
 * @url /admin/product/relevant/group/{groupId}
 */
export interface IAdminProductRelevantGroupGroupIdDelete{
	delChildren?: string; // 当文件夹下面有文件时，1表示强制删除
}/**
 * @description 删除产品文件夹（分组） buildReqGetOrPostTyped
 * @url /admin/product/relevant/group/{groupId}
 */
export interface IAdminProductRelevantGroupGroupIdDeleteGroup {
  path: {
		groupId: number;
	};
  params: IAdminProductRelevantGroupGroupIdDelete;
}

/**
 * @description 查询产品文件夹（分组） buildReqGetOrPostTyped
 * @url /admin/product/relevant/group/list
 */
export interface IAdminProductRelevantGroupListGet{
	productId?: number; // 产品ID
	type?: string; // 类型 file，image，video，news
}

/**
 * @description 添加产品文件夹（分组） buildReqGetOrPostTyped
 * @url /admin/product/relevant/group
 */
export interface IAdminProductRelevantGroupPost{
	productId: number; // 产品ID
	title: string; // 文件夹名
	type: string; // file | image
}

/**
 * @description 修改产品文件夹（分组） buildReqGetOrPostTyped
 * @url /admin/product/relevant/group
 */
export interface IAdminProductRelevantGroupPut{
	groupId: number; // 分组ID
	title: string; // 文件夹名
}

/**
 * @description 批量排序-分组 buildReqGetOrPostTyped
 * @url /admin/product/relevant/group/sort
 */
export interface IAdminProductRelevantGroupSortPost{
	data: any[];
}

/**
 * @description 删除产品相关内容 buildReqGetOrPostTyped
 * @url /admin/product/relevant/{id}
 */
export interface IAdminProductRelevantIdDelete{
}

/**
 * @description 查询产品相关内容-图片 buildReqGetOrPostTyped
 * @url /admin/product/relevant/image
 */
export interface IAdminProductRelevantImageGet{
	title?: string;
	productId: number; // 产品ID
}

/**
 * @description 添加产品相关内容-图片 buildReqGetOrPostTyped
 * @url /admin/product/relevant/image
 */
export interface IAdminProductRelevantImagePost{
	data: any[];
	productId: number; // 产品ID
}

/**
 * @description 查询产品相关内容等级 buildReqGetOrPostTyped
 * @url /admin/product/relevant/level/list
 */
export interface IAdminProductRelevantLevelListGet{
	productType: string; // 产品类型
}

/**
 * @description 添加产品相关内容等级 buildReqGetOrPostTyped
 * @url /admin/product/relevant/level
 */
export interface IAdminProductRelevantLevelPost{
	level: number; // 等级值 需>=0
	productType: string; // 产品类型
	status: number; // 状态 0正常 1禁用
	title: string; // 标题
}

/**
 * @description 修改产品相关内容等级 buildReqGetOrPostTyped
 * @url /admin/product/relevant/level
 */
export interface IAdminProductRelevantLevelPut{
	id: number; // 等级ID
	level: number; // 等级值 需>=0
	status: number; // 状态 0正常 1禁用
	title: string; // 标题
}

/**
 * @description 查询产品相关内容-新闻 buildReqGetOrPostTyped
 * @url /admin/product/relevant/news
 */
export interface IAdminProductRelevantNewsGet{
	title?: string;
	productId: number; // 产品ID
}

/**
 * @description 添加产品相关内容-新闻 buildReqGetOrPostTyped
 * @url /admin/product/relevant/news
 */
export interface IAdminProductRelevantNewsPost{
	data: any[];
	productId: number; // 产品ID
}

/**
 * @description 修改产品相关内容 buildReqGetOrPostTyped
 * @url /admin/product/relevant
 */
export interface IAdminProductRelevantPut{
	coverImg?: string; // 视频封面图
	id: number;
	isFrame: number; // 是否外链 0-否 1-是
	levelId?: number;
	sort: number; // 权重 降序
	title: string;
	url: string;
}

/**
 * @description 排序相关产品内容 buildReqGetOrPostTyped
 * @url /admin/product/relevant/sort
 */
export interface IAdminProductRelevantSortPost{
	data: any[];
}

/**
 * @description 查询产品相关内容-视频 buildReqGetOrPostTyped
 * @url /admin/product/relevant/video
 */
export interface IAdminProductRelevantVideoGet{
	title?: string;
	productId: number; // 产品ID
}

/**
 * @description 添加产品相关内容-视频 buildReqGetOrPostTyped
 * @url /admin/product/relevant/video
 */
export interface IAdminProductRelevantVideoPost{
	data: any[];
	productId: number; // 产品ID
}

/**
 * @description 撤销 buildReqGetOrPostTyped
 * @url /admin/product/revoke
 */
export interface IAdminProductRevokePost{
	id: number; // 产品ID
}

/**
 * @description 修改产品显示状态 buildReqGetOrPostTyped
 * @url /admin/product/showStatus
 */
export interface IAdminProductShowStatusPost{
	id?: number; // id
	showStatus?: number; // 显示状态 0-正常 1-隐藏
}

/**
 * @description 修改产品排序 buildReqGetOrPostTyped
 * @url /admin/product/sort
 */
export interface IAdminProductSortPut{
	id: number; // 产品ID
	sort: number; // 排序值
}

/**
 * @description 根据卡号获取银行信息 buildReqGetOrPostTyped
 * @url /admin/publish/bankcardinfo
 */
export interface IAdminPublishBankcardinfoGet{
	bankNumber: string; // 银行卡号
}

/**
 * @description 查询中介列表 buildReqGetOrPostTyped
 * @url /admin/publish/broker/list
 */
export interface IAdminPublishBrokerListGet{
}

/**
 * @description 合同组件分类 buildReqGetOrPostTyped
 * @url /admin/publish/contract/component
 */
export interface IAdminPublishContractComponentGet{
}

/**
 * @description 合同列表 buildReqGetOrPostTyped
 * @url /admin/publish/contract/list
 */
export interface IAdminPublishContractListGet{
	title?: string; // 合同标题
}

/**
 * @description 查询文案列表 buildReqGetOrPostTyped
 * @url /admin/publish/copywriting/list
 */
export interface IAdminPublishCopywritingListGet{
}

/**
 * @description 查询客服列表 buildReqGetOrPostTyped
 * @url /admin/publish/customer/list
 */
export interface IAdminPublishCustomerListGet{
}

/**
 * @description 查询部门列表 buildReqGetOrPostTyped
 * @url /admin/publish/dept/list
 */
export interface IAdminPublishDeptListGet{
	keyword?: string;
	otherDept?: string; // 是否查询其他部门  固定值：1
	investorId?: number; // 传了的话 则会existMyDeptThread  1-表示该团队下存在线索
}

/**
 * @description 查询部门列表 -我拥有的部门 buildReqGetOrPostTyped
 * @url /admin/publish/dept/ownerlist
 */
export interface IAdminPublishDeptOwnerlistGet{
	keyword?: string;
}

/**
 * @description 获取私有文件签名地址 buildReqGetOrPostTyped
 * @url /admin/publish/file/signatureUrl
 */
export interface IAdminPublishFileSignatureUrlGet{
	url: string; // 图片地址
}

/**
 * @description 流程列表 buildReqGetOrPostTyped
 * @url /admin/publish/flow/list
 */
export interface IAdminPublishFlowListGet{
	pageNum?: number;
	pageSize?: number;
	title?: string;
}

/**
 * @description 基金列表 buildReqGetOrPostTyped
 * @url /admin/publish/fund/list
 */
export interface IAdminPublishFundListGet{
	title?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 查询投资者列表 buildReqGetOrPostTyped
 * @url /admin/publish/investor/list
 */
export interface IAdminPublishInvestorListGet{
	keyword?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 查询律师列表 buildReqGetOrPostTyped
 * @url /admin/publish/lawyer/list
 */
export interface IAdminPublishLawyerListGet{
}

/**
 * @description 查询素材列表 buildReqGetOrPostTyped
 * @url /admin/publish/material/list
 */
export interface IAdminPublishMaterialListGet{
	name?: string; // 名称
	type?: any[]; // 0: 'img', 1: 'pdf', 2: 'video', 3: 'html', 4: 'txt', 5: 'ppt', 6: 'xls', 7: 'doc', 8: 'zip', 9: 'file'
	category?: number; // 1是批准书
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 查询文章列表 buildReqGetOrPostTyped
 * @url /admin/publish/news/list
 */
export interface IAdminPublishNewsListGet{
	title?: string; // 名称
	type?: number;
	category?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 操作人列表 buildReqGetOrPostTyped
 * @url /admin/publish/operator/list
 */
export interface IAdminPublishOperatorListGet{
	pageNum?: number;
	pageSize?: number;
	keyword?: string;
}

/**
 * @description 查询来源列表 buildReqGetOrPostTyped
 * @url /admin/publish/origin/list
 */
export interface IAdminPublishOriginListGet{
	seaId?: number; // 公海ID
	name?: string; // 来源名称
}

/**
 * @description 获取手机号区号 buildReqGetOrPostTyped
 * @url /admin/publish/phone/code/list
 */
export interface IAdminPublishPhoneCodeListGet{
}

/**
 * @description 产品列表 buildReqGetOrPostTyped
 * @url /admin/publish/product/list
 */
export interface IAdminPublishProductListGet{
	productName?: string; // 产品名称
}

/**
 * @description 在售产品列表 buildReqGetOrPostTyped
 * @url /admin/publish/product/sale/list
 */
export interface IAdminPublishProductSaleListGet{
	productName?: string; // 产品名称
}

/**
 * @description 产品类型列表 buildReqGetOrPostTyped
 * @url /admin/publish/product/type/list
 */
export interface IAdminPublishProductTypeListGet{
}

/**
 * @description 获取员工归属地 buildReqGetOrPostTyped
 * @url /admin/publish/publish/sysUser/city/list
 */
export interface IAdminPublishPublishSysUserCityListGet{
	keyword?: string; // 条件搜索
}

/**
 * @description 放弃/删除列表 buildReqGetOrPostTyped
 * @url /admin/publish/reason/list/{type}
 */
export interface IAdminPublishReasonListTypeGet{
}

/**
 * @description 查询公海列表 buildReqGetOrPostTyped
 * @url /admin/publish/sea/list
 */
export interface IAdminPublishSeaListGet{
	title?: string; // 标题
}

/**
 * @description 获取渠道列表 buildReqGetOrPostTyped
 * @url /admin/publish/sysChannel/list
 */
export interface IAdminPublishSysChannelListGet{
}

/**
 * @description 获取员工列表（一般用于线索里分配至员工） buildReqGetOrPostTyped
 * @url /admin/publish/sysUser/list/byLoginUser
 */
export interface IAdminPublishSysUserListByLoginUserGet{
	deptId?: number; // 团队ID
}

/**
 * @description 查询所有标签 buildReqGetOrPostTyped
 * @url /admin/publish/tag/list
 */
export interface IAdminPublishTagListGet{
}

/**
 * @description 查询我能看到的线索 buildReqGetOrPostTyped
 * @url /admin/publish/thread/list/byLoginUser
 */
export interface IAdminPublishThreadListByLoginUserGet{
	pageSize?: number;
	pageNum?: number;
	keyword?: string;
	investorIds?: string; // 线索ids 多个以英文逗号分隔
}

/**
 * @description 查询所有线索 buildReqGetOrPostTyped
 * @url /admin/publish/thread/list
 */
export interface IAdminPublishThreadListGet{
	keyword?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 查询待办事项类别列表 buildReqGetOrPostTyped
 * @url /admin/publish/todo/category/list
 */
export interface IAdminPublishTodoCategoryListGet{
}

/**
 * @description 上传文件-公共 buildReqFileTyped
 * @url /admin/publish/upload/file
 */
export interface IAdminPublishUploadFilePostFormData extends FormData{
	append: (name: 'files', value: string | Blob, fileName?: string) => void;
}

/**
 * @description 上传文件-私有 buildReqFileTyped
 * @url /admin/publish/upload/private/file
 */
export interface IAdminPublishUploadPrivateFilePostFormData extends FormData{
	append: (name: 'files', value: string | Blob, fileName?: string) => void;
}

/**
 * @description 删除原因 buildReqGetOrPostTyped
 * @url /admin/reason/{id}
 */
export interface IAdminReasonIdDelete{
}

/**
 * @description 查询放弃/删除详情 buildReqGetOrPostTyped
 * @url /admin/reason/{id}
 */
export interface IAdminReasonIdGet{
}

/**
 * @description 查询放弃/删除列表 buildReqGetOrPostTyped
 * @url /admin/reason/list/{type}
 */
export interface IAdminReasonListTypeGet{
	pageNum?: number;
	pageSize?: number;
}/**
 * @description 查询放弃/删除列表 buildReqGetOrPostTyped
 * @url /admin/reason/list/{type}
 */
export interface IAdminReasonListTypeGetGroup {
  path: {
		type: number; // 类型 0-放弃 1-删除
	};
  params: IAdminReasonListTypeGet;
}

/**
 * @description 添加放弃/删除原因 buildReqGetOrPostTyped
 * @url /admin/reason
 */
export interface IAdminReasonPost{
	reason: string; // 内容
	type: number; // 类型 0-放弃 1-删除
}

/**
 * @description 编辑放弃/删除原因 buildReqGetOrPostTyped
 * @url /admin/reason
 */
export interface IAdminReasonPut{
	id: number; // ID
	reason: string; // 内容
}

/**
 * @description 编辑放弃/删除原因状态 buildReqGetOrPostTyped
 * @url /admin/reason/status
 */
export interface IAdminReasonStatusPut{
	id: number; // ID
	status: number; // 状态 0-正常 1-禁用
}

/**
 * @description 查询佣金记录 buildReqGetOrPostTyped
 * @url /admin/rebate/list
 */
export interface IAdminRebateListGet{
	id?: number; // 投资者ID
	pageNum?: number; // 页码
	pageSize?: number; // 条数
	rebateNo?: string; // 佣金流水号
	investorNo?: string; // 投资者编号
	investorEmail?: string; // 投资者邮箱
	investorPhone?: string; // 投资者手机
	investorName?: string; // 投资者名称
	createById?: number; // 操作人ID
	beginTime?: string; // 充值时间
	endTime?: string; // 充值时间
	minAmount?: number; // 充值金额
	maxAmount?: number; // 充值金额
}

/**
 * @description 添加佣金 buildReqGetOrPostTyped
 * @url /admin/rebate
 */
export interface IAdminRebatePost{
	amount: number; // 金额
	bankAccountId: number; // 银行卡账户ID
	investorId: number; // 投资者ID
	remark?: string; // 备注
}

/**
 * @description 预约审核 buildReqGetOrPostTyped
 * @url /admin/reserve/audit
 */
export interface IAdminReserveAuditPost{
	id: number; // 预定ID
	reason?: string; // 拒绝原因
	status: number; // 1-通过 2-拒绝
}

/**
 * @description 预定列表 buildReqGetOrPostTyped
 * @url /admin/reserve/list
 */
export interface IAdminReserveListGet{
	status?: number; // 状态 0未处理 1已处理
	investorNo?: string;
	investorName?: string;
	investorEmail?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 查询所有可用角色 buildReqGetOrPostTyped
 * @url /admin/role/list/all
 */
export interface IAdminRoleListAllGet{
}

/**
 * @description 查询角色列表 buildReqGetOrPostTyped
 * @url /admin/role/list
 */
export interface IAdminRoleListGet{
	pageNum?: number; // 当前页数
	pageSize?: number; // 每页数量
	roleName?: string; // 角色名称
	status?: number; // 角色状态 0-正常 1-停用
}

/**
 * @description 修改角色权限 buildReqGetOrPostTyped
 * @url /admin/role/perms
 */
export interface IAdminRolePermsPut{
	menuIds: any[]; // 菜单/接口ID集合
	menuType: string; // C-菜单 F-接口
	roleId: number; // 角色ID
}

/**
 * @description 新增角色 buildReqGetOrPostTyped
 * @url /admin/role
 */
export interface IAdminRolePost{
	menuIds?: any[]; // 菜单id列表
	remark?: string; // 备注
	roleId?: number; // 角色id
	roleKey?: string; // 角色key
	roleName?: string; // 角色名称
	roleSort?: number; // 角色排序
	status?: number; // 角色状态 0-正常 1-停用
}

/**
 * @description 修改角色 buildReqGetOrPostTyped
 * @url /admin/role
 */
export interface IAdminRolePut{
	menuIds?: any[]; // 菜单id列表
	remark?: string; // 备注
	roleId?: number; // 角色id
	roleKey?: string; // 角色key
	roleName?: string; // 角色名称
	roleSort?: number; // 角色排序
	status?: number; // 角色状态 0-正常 1-停用
}

/**
 * @description 删除角色 buildReqGetOrPostTyped
 * @url /admin/role/{roleId}
 */
export interface IAdminRoleRoleIdDelete{
}

/**
 * @description 查询角色详情 buildReqGetOrPostTyped
 * @url /admin/role/{roleId}
 */
export interface IAdminRoleRoleIdGet{
}

/**
 * @description 删除公海 buildReqGetOrPostTyped
 * @url /admin/sea/{id}
 */
export interface IAdminSeaIdDelete{
}

/**
 * @description 公海详情 buildReqGetOrPostTyped
 * @url /admin/sea/{id}
 */
export interface IAdminSeaIdGet{
}

/**
 * @description 删除公海参与人 buildReqGetOrPostTyped
 * @url /admin/sea/join/user/{joinId}
 */
export interface IAdminSeaJoinUserJoinIdDelete{
}

/**
 * @description 获取公海参与人列表 buildReqGetOrPostTyped
 * @url /admin/sea/join/user/list
 */
export interface IAdminSeaJoinUserListGet{
	seaId: number; // 公海ID
	userName?: string; // 用户名
}

/**
 * @description 添加公海参与人 buildReqGetOrPostTyped
 * @url /admin/sea/join/user
 */
export interface IAdminSeaJoinUserPost{
	seaId: number; // 公海ID
	userIds: any[]; // 员工ids
}

/**
 * @description 公海列表 buildReqGetOrPostTyped
 * @url /admin/sea/list
 */
export interface IAdminSeaListGet{
	title?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 添加公海 buildReqGetOrPostTyped
 * @url /admin/sea
 */
export interface IAdminSeaPost{
	allocationStatus: number; // 分配状态 0-手动 1-自动
	autoAllocation?: number; // 自动分配 0-按员工ID 1-安权重
	autoSwitch?: number; // 自动规则开关 0-关闭 1-打开
	autoTimeRule?: any[];
	autoWeekRule?: any[]; // 自动规则时间-周
	choiceUserType?: number; // 选择员工类型 0-全部 1-自定义
	msgNotify?: number; // 消息提醒 0-不提醒 1-提醒
	seaDepts?: any[]; // 员工列表
	title: string; // 标题
}

/**
 * @description 编辑公海 buildReqGetOrPostTyped
 * @url /admin/sea
 */
export interface IAdminSeaPut{
	allocationStatus: number; // 分配状态 0-手动 1-自动
	autoAllocation?: number; // 自动分配 0-按员工ID 1-安权重
	autoSwitch?: number; // 自动规则开关 0-关闭 1-打开
	autoTimeRule?: any[];
	autoWeekRule?: any[]; // 自动规则时间-周
	choiceUserType?: number; // 选择员工类型 0-全部 1-自定义
	id: number; // id
	msgNotify?: number; // 消息提醒 0-不提醒 1-提醒
	seaDepts?: any[]; // 员工列表
	title: string; // 标题
}

/**
 * @description 编辑标签组选择范围 buildReqGetOrPostTyped
 * @url /admin/tag/group/choice
 */
export interface IAdminTagGroupChoicePut{
	choice: number; // 选择范围 0-单选 1-多选
	groupId?: number; // groupId
}

/**
 * @description 删除标签组 buildReqGetOrPostTyped
 * @url /admin/tag/group/{groupId}
 */
export interface IAdminTagGroupGroupIdDelete{
}

/**
 * @description 查询标签组列表 buildReqGetOrPostTyped
 * @url /admin/tag/group/list
 */
export interface IAdminTagGroupListGet{
}

/**
 * @description 添加标签组 buildReqGetOrPostTyped
 * @url /admin/tag/group
 */
export interface IAdminTagGroupPost{
	choice: number; // 选择范围 0-单选 1-多选
	status: number; // 状态 0-正常 1-禁用
	title: string;
}

/**
 * @description 编辑标签组 buildReqGetOrPostTyped
 * @url /admin/tag/group
 */
export interface IAdminTagGroupPut{
	choice: number; // 选择范围 0-单选 1-多选
	groupId?: number; // groupId
	status: number; // 状态 0-正常 1-禁用
	title: string;
}

/**
 * @description 编辑标签组状态 buildReqGetOrPostTyped
 * @url /admin/tag/group/status
 */
export interface IAdminTagGroupStatusPut{
	groupId?: number; // groupId
	status: number; // 状态 0-正常 1-禁用
}

/**
 * @description 查询标签列表-根据标签组ID buildReqGetOrPostTyped
 * @url /admin/tag/list/byGroupId
 */
export interface IAdminTagListByGroupIdGet{
	groupId?: number; // 标签组ID
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 添加标签 buildReqGetOrPostTyped
 * @url /admin/tag
 */
export interface IAdminTagPost{
	groupId: number; // 标签ID
	tags: any[];
}

/**
 * @description 编辑标签 buildReqGetOrPostTyped
 * @url /admin/tag
 */
export interface IAdminTagPut{
	tagId: number; // 标签ID
	title: string; // 标签名
}

/**
 * @description 编辑标签状态 buildReqGetOrPostTyped
 * @url /admin/tag/status
 */
export interface IAdminTagStatusPut{
	status: number; // 状态 0-正常 1-禁用
	tagId: number; // 标签ID
}

/**
 * @description 同步企业微信标签 buildReqGetOrPostTyped
 * @url /admin/tag/sync
 */
export interface IAdminTagSyncPost{
}

/**
 * @description 删除标签 buildReqGetOrPostTyped
 * @url /admin/tag/{tagId}
 */
export interface IAdminTagTagIdDelete{
}

/**
 * @description 用户线索添加跟进团队（线索详情-用户线索添加跟进团队-多团队） buildReqGetOrPostTyped
 * @url /admin/thread/addDeptToThread
 */
export interface IAdminThreadAddDeptToThreadPost{
	deptIds: any[]; // 团队ID集合
	investorId: number; // 线索ID
}

/**
 * @description 团队添加线索（团队详情-团队添加线索-单团队） buildReqGetOrPostTyped
 * @url /admin/thread/addThreadToDept
 */
export interface IAdminThreadAddThreadToDeptPost{
	deptId: number; // 团队ID
	investorIds: any[]; // 线索ID集合
}

/**
 * @description 全部客户列表-一般仅管理员有权限 buildReqGetOrPostTyped
 * @url /admin/thread/all/list
 */
export interface IAdminThreadAllListGet{
	keyword?: string; // 搜索查询
	pageNum?: number;
	pageSize?: number;
	statusLevel?: number; // 0-待跟进 1-跟进中 2-待审核 3-重要客户 4-待分配 5-已分配 9-全部
	employeeId?: number; // 跟进人
	important?: number; // 是否标记为重点 0-否 1-是
	customerStatus?: number; // 客户状态 0-强意愿 1-有效 2-长期 3-无效
	city?: string; // 城市
	productId?: number; // 产品id
	newThread?: number; // 新线索 固定值 1
	userCity?: string; // 员工归属地
	tagId?: number; // 标签ID
	deptId?: number; // 团队ID
	timeday?: string; // today yesterday week month
	personageTag?: string; // 个人标签
	productType?: string; // 意向产品类型
	tranStatus?: number; // 成交状态 0-未签约 1-签约 2-复购 9-退出
	followStatus?: number; // 线索状态 0-线索 2-有效 8-长期
	primaryFollowerId?: number; // 主跟进人ID
	province?: string; // 省份
	followRecordKeyword?: string; // 旅程内容搜索
}

/**
 * @description 分配客户（支持分配给多个团队里的多个人） buildReqGetOrPostTyped
 * @url /admin/thread/allocation
 */
export interface IAdminThreadAllocationPost{
	depts: any[]; // 部门集合
	investorId: number;
}

/**
 * @description 审核申请 buildReqGetOrPostTyped
 * @url /admin/thread/apply/audit
 */
export interface IAdminThreadApplyAuditPost{
	id: number;
	realDeptId?: number; // 团队ID
	reason?: string; // 驳回原因
	status: number; // 1-通过 2-驳回
}

/**
 * @description 线索申请至团队 buildReqGetOrPostTyped
 * @url /admin/thread/apply
 */
export interface IAdminThreadApplyPost{
	investorId: number; // 线索ID
	remark: string; // 备注信息
}

/**
 * @description 放弃/删除审核详情 buildReqGetOrPostTyped
 * @url /admin/thread/audit/detail/{id}
 */
export interface IAdminThreadAuditDetailIdGet{
}

/**
 * @description 放弃/删除审核列表 buildReqGetOrPostTyped
 * @url /admin/thread/audit/list/{type}
 */
export interface IAdminThreadAuditListTypeGet{
	keyword?: string;
	status?: number; // 状态 0-待审核 1-审核通过 2-审核不通过 3-删除客户/放弃客户 9-已撤销
	deptId?: number; // 团队ID
}/**
 * @description 放弃/删除审核列表 buildReqGetOrPostTyped
 * @url /admin/thread/audit/list/{type}
 */
export interface IAdminThreadAuditListTypeGetGroup {
  path: {
		type: number; // 类型 0-放弃 1-删除 2-转让 3-申请 4-意向等级 5-成交状态 -1全部
	};
  params: IAdminThreadAuditListTypeGet;
}

/**
 * @description 审核 放弃/删除审核 buildReqGetOrPostTyped
 * @url /admin/thread/audit
 */
export interface IAdminThreadAuditPost{
	ids: any[];
	realDeptId?: number; // 团队ID
	reason?: string; // 驳回理由
	seaId?: number; // 公海ID 放弃-通过时
	status: number; // 1-通过 2-不通过
}

/**
 * @description 批量添加跟进部门 buildReqGetOrPostTyped
 * @url /admin/thread/batchAddDeptToThread
 */
export interface IAdminThreadBatchAddDeptToThreadPost{
	deptIds: any[]; // 团队ID集合
	investorIds: any[]; // 线索IDs
}

/**
 * @description 批量添加跟进人 buildReqGetOrPostTyped
 * @url /admin/thread/batchAllocation
 */
export interface IAdminThreadBatchAllocationPost{
	depts: any[]; // 部门集合
	investorIds: any[]; // 线索ids
}

/**
 * @description 拨号 buildReqGetOrPostTyped
 * @url /admin/thread/call/phone
 */
export interface IAdminThreadCallPhonePost{
	investorId: number;
	phoneId: string; // 手机号id
}

/**
 * @description 检查电销手机是否登录 buildReqGetOrPostTyped
 * @url /admin/thread/check/dxLogin
 */
export interface IAdminThreadCheckDxLoginPost{
}

/**
 * @description 更改客户意向项目 buildReqGetOrPostTyped
 * @url /admin/thread/customer/product
 */
export interface IAdminThreadCustomerProductPost{
	investorId: number; // 投资者ID
	productTypes: any[]; // 产品类型
}

/**
 * @description 更改客户意向状态 buildReqGetOrPostTyped
 * @url /admin/thread/customer/status
 */
export interface IAdminThreadCustomerStatusPost{
	customerStatus: number; // 客户状态 0-强意愿 1-有效 2-长期 9-无效
	investorId: number; // 投资者ID
	isAudit?: number; // 是否需要审核 1-审核
	remark?: string;
}

/**
 * @description 删除 buildReqGetOrPostTyped
 * @url /admin/thread/delete
 */
export interface IAdminThreadDeletePost{
	investorId: number; // 投资人ID
	reasonId: number; // 原因ID
	remark?: string; // 备注
}

/**
 * @description 团队移除线索 buildReqGetOrPostTyped
 * @url /admin/thread/delThreadForDept
 */
export interface IAdminThreadDelThreadForDeptPost{
	deptId: number; // 部门ID
	investorIds: any[]; // 线索ID集合
}

/**
 * @description 团队客户列表-一般仅管理员和负责人有权限 buildReqGetOrPostTyped
 * @url /admin/thread/dept/list
 */
export interface IAdminThreadDeptListGet{
	keyword?: string; // 搜索查询
	pageNum?: number;
	pageSize?: number;
	statusLevel?: number; // 0-待跟进 1-跟进中 2-待审核 3-重要客户 4-待分配 5-已分配 9-全部
	employeeId?: number; // 跟进人
	important?: number; // 是否标记为重点 0-否 1-是
	customerStatus?: number; // 客户状态 0-强意愿 1-有效 2-长期 3-无效
	city?: string; // 城市
	productId?: number; // 产品id
	newThread?: number; // 新线索 固定值 1
	userCity?: string; // 员工归属地
	tagIds?: string; // 标签ID 多个以英文逗号隔开
	deptId?: number; // 团队ID
	timeday?: string; // today yesterday week month
	personageTag?: string; // 个人标签
	productType?: string; // 意向产品类型
	tranStatus?: number; // 成交状态 0-未签约 1-签约 2-复购 9-退出
	followStatus?: number; // 线索状态 0-线索 2-有效 8-长期
	primaryFollowerId?: number; // 主跟进人ID
	province?: string; // 省份
	startTime?: string; // 开始时间
	endTime?: string; // 结束时间
	followRecordKeyword?: string; // 旅程内容搜索
	sortField?: string; // 排序  followTimeAsc-跟进时间升序； followTimeDesc-跟进时间倒序； createTimeAsc-获取时间升序 ；createTimeDesc-获取时间倒序
	originId?: number;
}

/**
 * @description 下载导出 buildReqGetOrPostTyped
 * @url /admin/thread/download
 */
export interface IAdminThreadDownloadPost{
	id: number;
}

/**
 * @description 查询签约详情 buildReqGetOrPostTyped
 * @url /admin/thread/employee/conclude/detail
 */
export interface IAdminThreadEmployeeConcludeDetailGet{
	id?: number;
}

/**
 * @description 删除签约 buildReqGetOrPostTyped
 * @url /admin/thread/employee/conclude/{id}
 */
export interface IAdminThreadEmployeeConcludeIdDelete{
}

/**
 * @description 查询签约列表 buildReqGetOrPostTyped
 * @url /admin/thread/employee/conclude/list
 */
export interface IAdminThreadEmployeeConcludeListGet{
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 新增签约 buildReqGetOrPostTyped
 * @url /admin/thread/employee/conclude
 */
export interface IAdminThreadEmployeeConcludePost{
	concludeTime: string; // 签单时间
	employeeData: any[];
	investorId: number; // 线索ID
	remark?: string; // 备注描述
}

/**
 * @description 修改签约 buildReqGetOrPostTyped
 * @url /admin/thread/employee/conclude
 */
export interface IAdminThreadEmployeeConcludePut{
	concludeTime: string; // 签单时间
	employeeData: any[];
	id: number; // 主键ID
	remark?: string; // 备注描述
}

/**
 * @description 查询签约排行榜 buildReqGetOrPostTyped
 * @url /admin/thread/employee/conclude/rank/{type}
 */
export interface IAdminThreadEmployeeConcludeRankTypeGet{
}

/**
 * @description 获取导出列表 buildReqGetOrPostTyped
 * @url /admin/thread/export/list
 */
export interface IAdminThreadExportListGet{
	pageNum?: number;
	pageSize?: number;
	position?: string; // 位置 sea team mine
	status?: number; // 状态 0-打包中 1-打包完成 2-打包失败
	createById?: number; // 下载人ID
}

/**
 * @description 数据导出 buildReqGetOrPostTyped
 * @url /admin/thread/export
 */
export interface IAdminThreadExportPost{
	position: string; // 位置 'sea','team','mine'
	queryParams: any; // 查询参数
}

/**
 * @description 客户详情-跟进企微联系人ID buildReqGetOrPostTyped
 * @url /admin/thread/external/{externalUserId}
 */
export interface IAdminThreadExternalExternalUserIdGet{
}

/**
 * @description 旅程列表 buildReqGetOrPostTyped
 * @url /admin/thread/follow/record
 */
export interface IAdminThreadFollowRecordGet{
	investorId: number; // 投资者ID
	pageSize?: number;
	pageNum?: number;
	followRecordKeyword?: string;
}

/**
 * @description 添加旅程 buildReqGetOrPostTyped
 * @url /admin/thread/follow/record
 */
export interface IAdminThreadFollowRecordPost{
	completeTime: string; // 完成时间
	content: string; // 跟进内容
	fileList?: any[]; // 附件集合
	followStatus: number; // 跟进状态
	investorId: number; // 投资者ID
}

/**
 * @description 变更跟进状态 buildReqGetOrPostTyped
 * @url /admin/thread/follow/status
 */
export interface IAdminThreadFollowStatusPut{
	followStatus: number; // 跟进状态
	investorId: number; // 投资者ID
}

/**
 * @description 放弃 buildReqGetOrPostTyped
 * @url /admin/thread/giveup
 */
export interface IAdminThreadGiveupPost{
	investorId: number; // 投资人ID
	reasonId: number; // 原因ID
	remark?: string; // 备注
}

/**
 * @description 客户详情 buildReqGetOrPostTyped
 * @url /admin/thread/{id}
 */
export interface IAdminThreadIdGet{
}

/**
 * @description 标记为重要/不重要客户 buildReqGetOrPostTyped
 * @url /admin/thread/important
 */
export interface IAdminThreadImportantPost{
	important: number; // 是否标记为重点 0-否 1-是
	investorId: number;
}

/**
 * @description 公海客户列表 buildReqGetOrPostTyped
 * @url /admin/thread/list
 */
export interface IAdminThreadListGet{
	keyword?: string;
	seaId?: number; // 公海ID 0-未知公海 空字符串或不传-全部
	pageNum?: number;
	pageSize?: number;
	important?: number; // 是否标记为重点 0-否 1-是
	customerStatus?: number; // 客户状态 0-强意愿 1-有效 2-长期 3-无效
	city?: string; // 城市
	productId?: number; // 产品ID
	newThread?: number; // 新线索 固定值 1
	province?: string; // 省份
	channelId?: string;
	sortField?: string; // 排序  followTimeAsc-跟进时间升序； followTimeDesc-跟进时间倒序； createTimeAsc-获取时间升序 ；createTimeDesc-获取时间倒序
	tagIds?: string; // 企业标签ids 多个以英文逗号隔开
	originId?: number; // 来源ID
}

/**
 * @description 获取合并后的基本信息 buildReqGetOrPostTyped
 * @url /admin/thread/merge/base/info
 */
export interface IAdminThreadMergeBaseInfoPost{
	mergeData: any[];
}

/**
 * @description 获取合并后的旅程信息 buildReqGetOrPostTyped
 * @url /admin/thread/merge/follow/record
 */
export interface IAdminThreadMergeFollowRecordPost{
	followRecordKeyword?: string;
	mergeData: any[];
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 合并线索 buildReqGetOrPostTyped
 * @url /admin/thread/merge
 */
export interface IAdminThreadMergePost{
	mergeData: any[];
}

/**
 * @description 我的客户列表 buildReqGetOrPostTyped
 * @url /admin/thread/mine/list
 */
export interface IAdminThreadMineListGet{
	keyword?: string; // 搜索查询
	pageNum?: number;
	pageSize?: number;
	statusLevel?: number; // 0-待跟进 1-跟进中 2-待审核 3-重要客户 4-待分配 5-已分配 9-全部
	important?: number; // 是否标记为重点 0-否 1-是
	customerStatus?: number; // 客户状态 0-强意愿 1-有效 2-长期 3-无效
	city?: string; // 城市
	productId?: number; // 产品id
	newThread?: string; // 新线索 固定值 1
	userCity?: string; // 员工归属地
	tagIds?: string; // 标签ID 多个以英文逗号隔开
	deptId?: number; // 团队ID
	timeday?: string; // today yesterday week month
	personageTag?: string; // 个人标签
	productType?: string; // 意向产品类型
	tranStatus?: number; // 成交状态 0-未签约 1-签约 2-复购 9-退出
	followStatus?: number; // 线索状态 0-线索 2-有效 8-长期
	primaryFollowerId?: number; // 主跟进人ID
	province?: string; // 省份
	followRecordKeyword?: string; // 旅程内容搜索
	sortField?: string; // 排序  followTimeAsc-跟进时间升序； followTimeDesc-跟进时间倒序； createTimeAsc-获取时间升序 ；createTimeDesc-获取时间倒序
	originId?: number;
}

/**
 * @description 删除个人标签（根据用户删除所有线索下的标签） buildReqGetOrPostTyped
 * @url /admin/thread/personage/tag/all
 */
export interface IAdminThreadPersonageTagAllDelete{
	tagName: string; // 标签名
}

/**
 * @description 所有的个人标签 buildReqGetOrPostTyped
 * @url /admin/thread/personage/tag/alllist
 */
export interface IAdminThreadPersonageTagAlllistGet{
	name?: string; // 标签名
}

/**
 * @description 删除个人标签 buildReqGetOrPostTyped
 * @url /admin/thread/personage/tag/{id}
 */
export interface IAdminThreadPersonageTagIdDelete{
}

/**
 * @description 我的个人标签 buildReqGetOrPostTyped
 * @url /admin/thread/personage/tag/minelist
 */
export interface IAdminThreadPersonageTagMinelistGet{
}

/**
 * @description 添加个人标签 buildReqGetOrPostTyped
 * @url /admin/thread/personage/tag
 */
export interface IAdminThreadPersonageTagPost{
	investorId: number; // 线索ID
	name: string; // 标签名称
}

/**
 * @description 生成手机号随机串 buildReqGetOrPostTyped
 * @url /admin/thread/phone/hashcode
 */
export interface IAdminThreadPhoneHashcodePost{
	investorId: number;
	phoneId: string; // 手机号ID
}

/**
 * @description 添加客户 buildReqGetOrPostTyped
 * @url /admin/thread
 */
export interface IAdminThreadPost{
	callId?: string; // 通话记录ID
	city?: string; // 城市
	customerStatus?: number; // 客户状态 0-强意愿 1-有效 2-长期 9-无效
	depts?: any[]; // 部门集合
	email?: string; // 邮箱
	externalType?: string; // 0未知 1微信用户 2企业微信用户 3普通其他用户
	externalUserId?: string; // 企业微信外部用户ID
	followStatus?: number; // 最近跟进状态
	important?: number; // 是否标记为重点 0-否 1-是
	lastFollowRemark?: string; // 最近跟进描述
	lastFollowTime?: string; // 最近跟进时间
	originId?: number; // 来源ID
	phoneList: any[]; // 手机号集合
	productIds?: any[]; // 意向产品ids
	promotionAddress?: string; // 推广页地址
	province?: string; // 省份
	remark?: string; // 客户备注
	seaId: number; // 公海ID
	tagIds?: any[]; // 标签ids
	unionid?: string; // 企业微信外部unionid
	userGroupIds?: any[]; // 客户组IDs
	userName: string; // 姓名
	wechat?: string; // 微信号
	wechatName?: string; // 微信昵称
	wechatUserId?: string; // 企业微信员工ID
}

/**
 * @description 获取主跟进人列表 buildReqGetOrPostTyped
 * @url /admin/thread/primary/follower/list
 */
export interface IAdminThreadPrimaryFollowerListGet{
}

/**
 * @description 设置主跟进人 buildReqGetOrPostTyped
 * @url /admin/thread/primary/follower
 */
export interface IAdminThreadPrimaryFollowerPost{
	investorId: number; // 线索ID
	userId: number; // 员工ID
}

/**
 * @description 获取所有线索（不关心有无被分配，可用于添加线索到团队，该API一般不需要权限控制） buildReqGetOrPostTyped
 * @url /admin/thread/public/allList
 */
export interface IAdminThreadPublicAllListGet{
	keyword?: string; // 搜索查询
	pageNum?: number;
	pageSize?: number;
	statusLevel?: number; // 0-待跟进 1-跟进中 2-待审核 3-重点客户 9-全部
	employeeId?: number; // 跟进人
	important?: number; // 是否标记为重点 0-否 1-是
	customerStatus?: number; // 客户状态 0-强意愿 1-有效 2-长期 3-无效
	city?: string; // 城市
	productId?: number; // 产品id
	newThread?: number; // 新线索 固定值 1
	userCity?: string; // 员工归属地
	tagId?: number; // 标签ID
	deptId: number; // 团队ID，该ID必填写，用于返回线索列表时是否存在该团队
	personageTag?: string; // 个人标签
	productType?: string; // 意向产品类型
	channelId?: string; // 渠道ID
	concludeStatus?: number; // 是否签单 固定值 1
}

/**
 * @description 编辑客户 buildReqGetOrPostTyped
 * @url /admin/thread
 */
export interface IAdminThreadPut{
	city?: string; // 城市
	email?: string; // 邮箱
	investorId: number;
	originId?: number; // 来源ID
	phoneList?: any[]; // 手机号集合
	province?: string; // 省份
	remark?: string; // 客户备注
	tagIds?: any[]; // 标签ids
	userGroupIds?: any[]; // 客户组IDs
	userName: string; // 姓名
	wechat?: string; // 微信号
	wechatName?: string; // 微信昵称
}

/**
 * @description 领取线索 buildReqGetOrPostTyped
 * @url /admin/thread/receive
 */
export interface IAdminThreadReceivePost{
	investorId: number;
}

/**
 * @description 回收站客户列表 buildReqGetOrPostTyped
 * @url /admin/thread/recycle/list
 */
export interface IAdminThreadRecycleListGet{
	keyword?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 撤销 buildReqGetOrPostTyped
 * @url /admin/thread/revoke
 */
export interface IAdminThreadRevokePost{
	transferRecordId: number; // 记录ID
}

/**
 * @description 发送短信 buildReqGetOrPostTyped
 * @url /admin/thread/sms/phone
 */
export interface IAdminThreadSmsPhonePost{
	content: string; // 短信内容
	investorId: number;
	phoneId: string; // 手机号ID
}

/**
 * @description 获取跟进状态 buildReqGetOrPostTyped
 * @url /admin/thread/status/list
 */
export interface IAdminThreadStatusListGet{
}

/**
 * @description 修改客户标签 buildReqGetOrPostTyped
 * @url /admin/thread/tag
 */
export interface IAdminThreadTagPut{
	investorId: number;
	tagIds: any[];
}

/**
 * @description 转让 buildReqGetOrPostTyped
 * @url /admin/thread/transfer
 */
export interface IAdminThreadTransferPost{
	employeeId: number; // 员工ID
	investorId: number; // 投资人ID
}

/**
 * @description 申请成交状态 buildReqGetOrPostTyped
 * @url /admin/thread/tran/status/apply
 */
export interface IAdminThreadTranStatusApplyPost{
	investorId: number; // 投资者ID
	remark?: string; // 备注
	tranStatus: number; // 成交状态 0-未签约 1-签约 2-复购 9-退出
}

/**
 * @description 更改成交状态 buildReqGetOrPostTyped
 * @url /admin/thread/tran/status
 */
export interface IAdminThreadTranStatusPost{
	investorId: number; // 投资者ID
	isAudit?: number; // 是否需审核 1-是
	remark?: string; // 备注
	tranStatus: number; // 成交状态 0-未签约 1-签约 2-复购 9-退出
}

/**
 * @description 最新未跟进消息提醒统计信息 buildReqGetOrPostTyped
 * @url /admin/thread/unfollow/remind/info
 */
export interface IAdminThreadUnfollowRemindInfoGet{
}

/**
 * @description 最新未跟进消息提醒列表 buildReqGetOrPostTyped
 * @url /admin/thread/unfollow/remind/list
 */
export interface IAdminThreadUnfollowRemindListGet{
	pageSize?: number;
	pageNum?: number;
	keyword?: string; // 用户名/手机号/客户分组
	day?: number; // 3/5/10
}

/**
 * @description 查询客户组 buildReqGetOrPostTyped
 * @url /admin/thread/user/group/list
 */
export interface IAdminThreadUserGroupListGet{
	title?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 添加客户组 buildReqGetOrPostTyped
 * @url /admin/thread/user/group
 */
export interface IAdminThreadUserGroupPost{
	title: string; // 客户组名
}

/**
 * @description 批量添加任务 buildReqGetOrPostTyped
 * @url /admin/todo/batch
 */
export interface IAdminTodoBatchPost{
	category: string; // 主任务 类别
	deptId: number; // 主任务部门ID
	subTodoList?: any[];
	title: string; // 主任务标题
}

/**
 * @description 获取更变历史 buildReqGetOrPostTyped
 * @url /admin/todo/change/list
 */
export interface IAdminTodoChangeListGet{
	todoId: number;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 获取评论列表 buildReqGetOrPostTyped
 * @url /admin/todo/comment/list
 */
export interface IAdminTodoCommentListGet{
	todoId: number;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 添加评论 buildReqGetOrPostTyped
 * @url /admin/todo/comment
 */
export interface IAdminTodoCommentPost{
	content: string;
	eitUserIds?: any[]; // @的人  @全部时 固定值为 *
	fileList: any[];
	todoId: number; // 任务/子任务ID
}

/**
 * @description 完成/取消完成待办 buildReqGetOrPostTyped
 * @url /admin/todo/complete
 */
export interface IAdminTodoCompletePost{
	status: number; // 1-完成 0-取消完成
	todoId: number;
}

/**
 * @description 完成/取消完成任务清单 buildReqGetOrPostTyped
 * @url /admin/todo/detail/complete
 */
export interface IAdminTodoDetailCompletePost{
	status: number; // 1-完成 0-取消完成
	todoDetailId: number; // 任务清单ID
}

/**
 * @description 获取任务清单详情 buildReqGetOrPostTyped
 * @url /admin/todo/detail/info
 */
export interface IAdminTodoDetailInfoGet{
	todoDetailId: number; // 任务清单ID
}

/**
 * @description 获取任务清单列表 buildReqGetOrPostTyped
 * @url /admin/todo/detail/list
 */
export interface IAdminTodoDetailListGet{
	todoSubId: number; // 子任务ID
	status?: number; // 状态 1-已完成 0-未完成
}

/**
 * @description 添加任务清单 buildReqGetOrPostTyped
 * @url /admin/todo/detail
 */
export interface IAdminTodoDetailPost{
	endTime?: string; // 结束时间
	leaderId?: number; // 负责人ID
	title: string; // 标题
	todoSubId: number; // 子任务ID
}

/**
 * @description 修改任务清单 buildReqGetOrPostTyped
 * @url /admin/todo/detail
 */
export interface IAdminTodoDetailPut{
	endTime?: string; // 结束时间
	leaderId?: number; // 负责人ID
	title: string; // 标题
	todoDetailId: number; // 任务清单ID
}

/**
 * @description 获取待办详情 buildReqGetOrPostTyped
 * @url /admin/todo/info
 */
export interface IAdminTodoInfoGet{
	todoId: number;
}

/**
 * @description 获取负责人列表 buildReqGetOrPostTyped
 * @url /admin/todo/leader/list
 */
export interface IAdminTodoLeaderListGet{
}

/**
 * @description 获取待办列表 buildReqGetOrPostTyped
 * @url /admin/todo/list
 */
export interface IAdminTodoListGet{
	title?: string;
	endTime?: string;
	status?: number; // 0-未完成 1-已完成
	leaderId?: string;
	pageNum?: number;
	pageSize?: number;
	startTime?: string;
	category?: string; // 类别
	deptId?: number; // 部门ID
}

/**
 * @description 获取部门列表（左侧拦） buildReqGetOrPostTyped
 * @url /admin/todo/owner/deptList
 */
export interface IAdminTodoOwnerDeptListGet{
}

/**
 * @description 添加待办 buildReqGetOrPostTyped
 * @url /admin/todo
 */
export interface IAdminTodoPost{
	category: string; // 类别
	joinIds?: any[];
	leaderIds?: any[];
	title: string;
}

/**
 * @description 修改待办 buildReqGetOrPostTyped
 * @url /admin/todo
 */
export interface IAdminTodoPut{
	category: string; // 类别
	joinIds?: any[];
	leaderIds?: any[];
	title: string; // 标题
	todoId: number;
}

/**
 * @description 添加回复 buildReqGetOrPostTyped
 * @url /admin/todo/reply
 */
export interface IAdminTodoReplyPost{
	content: string;
	eitUserIds?: any[]; // @的人 @全部时 值为 *
	fileList: any[];
	id: number; // 评论/回复ID
}

/**
 * @description 完成/取消完成子待办 buildReqGetOrPostTyped
 * @url /admin/todo/sub/complete
 */
export interface IAdminTodoSubCompletePost{
	status: number; // 1-完成 0-取消完成
	todoSubId: number; // 子待办ID
}

/**
 * @description 获取子待办详情 buildReqGetOrPostTyped
 * @url /admin/todo/sub/detail
 */
export interface IAdminTodoSubDetailGet{
	todoSubId: number; // 子待办ID
}

/**
 * @description 获取子待办列表 buildReqGetOrPostTyped
 * @url /admin/todo/sub/list
 */
export interface IAdminTodoSubListGet{
	todoId: number; // 待办ID
	status?: number; // 状态 1-已完成 0-未完成
}

/**
 * @description 添加子待办 buildReqGetOrPostTyped
 * @url /admin/todo/sub
 */
export interface IAdminTodoSubPost{
	content?: string;
	endTime?: string; // 结束时间
	fileList?: any[];
	joinIds?: any[];
	loopValues?: any[]; // 循环任务 周一到周日 0-6 /0-周日
	startTime?: string; // 开始时间
	title: string; // 标题
	todoId: number; // 待办ID
}

/**
 * @description 修改子待办 buildReqGetOrPostTyped
 * @url /admin/todo/sub
 */
export interface IAdminTodoSubPut{
	content?: string;
	endTime?: string; // 结束时间
	fileList?: any[];
	joinIds?: any[];
	loopValues?: any[]; // 循环任务 周一到周日 0-6 /0-周日
	startTime?: string; // 开始时间
	title: string; // 标题
	todoSubId: number; // 子待办ID
}

/**
 * @description 修改密码 buildReqGetOrPostTyped
 * @url /admin/updatePwd
 */
export interface IAdminUpdatePwdPut{
	newPassword?: string; // 新密码
	oldPassword?: string; // 旧密码
}

/**
 * @description 查询管理员列表 buildReqGetOrPostTyped
 * @url /admin/user/list
 */
export interface IAdminUserListGet{
	beginTime?: string; // 开始时间 yyyy-MM-dd HH:mm:ss
	endTime?: string; // 结束时间 yyyy-MM-dd HH:mm:ss
	pageNum?: number; // 当前页数
	pageSize?: number; // 每页数量
	phone?: string; // 手机号码
	status?: number; // 账号状态 0-正常 1-停用
	userName?: string; // 用户名
	email?: string;
	roleKey?: string;
	deptId?: number; // 部门ID 未知部门填写0
	keyword?: string; // 搜索查询
}

/**
 * @description 移除员工-从部门里移除 buildReqGetOrPostTyped
 * @url /admin/user/moveUser
 */
export interface IAdminUserMoveUserPost{
	deptId: number; // 部门id
	userId: number; // 需要更改的用户
}

/**
 * @description 新增管理员 buildReqGetOrPostTyped
 * @url /admin/user
 */
export interface IAdminUserPost{
	avatar?: string; // 图像
	city?: string; // 归属地
	deptId: number; // 部门ID
	email: string; // 邮箱
	mergePerm: number; // 是否有合并线索权限 0-无 1-有
	password?: string; // 密码
	phone?: string; // 手机号码
	qrCode?: string; // 二维码
	remark?: string; // 备注
	roleIdList?: any[]; // 角色id列表列表
	roleKey?: string; // roleKey
	sensitivePerm: number; // 是否有敏感信息权限 0-无 1-有
	status?: number; // 账号状态 0-正常 1-停用
	todoPerm: number; // 是否有权限添加主任务 1-是 0-否
	userId?: number; // id 新增时不传 修改时必传
	userName?: string; // 用户名
}

/**
 * @description 修改管理员基本信息 buildReqGetOrPostTyped
 * @url /admin/user/profile
 */
export interface IAdminUserProfilePut{
	avatar?: string; // 图像
	qrCode?: string; // 二维码
	userId: number; // 用户ID
	userName: string; // 名称
}

/**
 * @description 修改管理员 buildReqGetOrPostTyped
 * @url /admin/user
 */
export interface IAdminUserPut{
	avatar?: string; // 图像
	city?: string; // 归属地
	email: string; // 邮箱
	mergePerm: number; // 是否有合并线索权限 0-无 1-有
	password?: string; // 密码
	phone?: string; // 手机号码
	qrCode?: string; // 二维码
	remark?: string; // 备注
	roleIdList?: any[]; // 角色id列表列表
	roleKey?: string; // roleKey
	sensitivePerm: number; // 是否有敏感信息权限 0-无 1-有
	status?: number; // 账号状态 0-正常 1-停用
	todoPerm: number; // 是否有权限添加主任务 1-是 0-否
	userId?: number; // id 新增时不传 修改时必传
	userName?: string; // 用户名
}

/**
 * @description 关联老账户到部门 buildReqGetOrPostTyped
 * @url /admin/user/relevantUserToDept
 */
export interface IAdminUserRelevantUserToDeptPost{
	deptId: number;
	userId: number;
}

/**
 * @description 重置密码 buildReqGetOrPostTyped
 * @url /admin/user/resetPwd
 */
export interface IAdminUserResetPwdPut{
	password?: string; // 密码
	userId?: number; // 用户id
}

/**
 * @description 获取管理员角色key buildReqGetOrPostTyped
 * @url /admin/user/rolekey
 */
export interface IAdminUserRolekeyGet{
}

/**
 * @description 删除管理员 buildReqGetOrPostTyped
 * @url /admin/user/{userId}
 */
export interface IAdminUserUserIdDelete{
}

/**
 * @description 查询管理员详情 buildReqGetOrPostTyped
 * @url /admin/user/{userId}
 */
export interface IAdminUserUserIdGet{
}

/**
 * @description 企业微信登录-绑定账号 buildReqGetOrPostTyped
 * @url /admin/weblogin/bind
 */
export interface IAdminWebloginBindPost{
	email: string; // 邮箱
	emailCode: string; // 有效验证码
	wtoken: string; // wtoken
}

/**
 * @description 企业微信登录-绑定账号-发送邮件 buildReqGetOrPostTyped
 * @url /admin/weblogin/sendEmail
 */
export interface IAdminWebloginSendEmailPost{
	email: string;
}

/**
 * @description 获取提现详情 buildReqGetOrPostTyped
 * @url /admin/withdraw/{id}
 */
export interface IAdminWithdrawIdGet{
}

/**
 * @description 查询提现列表 buildReqGetOrPostTyped
 * @url /admin/withdraw/list
 */
export interface IAdminWithdrawListGet{
	beginTime?: string; // 发起开始时间 yyyy-MM-dd HH:mm:ss
	endTime?: string; // 发起结束时间 yyyy-MM-dd HH:mm:ss
	isAsc?: string; // 顺序 默认desc
	maxAmount?: number; // 提现金额最大值
	minAmount?: number; // 提现金额最小值
	operatorEmail?: string; // 用户邮箱
	operatorId?: number; // 用户id
	operatorName?: string; // 用户名称
	operatorNo?: string; // 用户编号
	operatorPhone?: string; // 用户手机
	operatorType?: string; // 用户角色类型
	orderByColumn?: string; // 排序字段 默认create_time
	pageNum?: number; // 当前页数
	pageSize?: number; // 每页数量
	status?: number; // 0-提现中 1-成功 2-失败
	updateBeginTime?: string; // 操作开始时间 yyyy-MM-dd HH:mm:ss
	updateById?: number; // 操作人id
	updateEndTime?: string; // 操作结束时间 yyyy-MM-dd HH:mm:ss
	withdrawNo?: string; // 提现编号
}

/**
 * @description 通过审核 buildReqGetOrPostTyped
 * @url /admin/withdraw/pass
 */
export interface IAdminWithdrawPassPost{
	id?: number; // id
	remark?: string; // 备注
}

/**
 * @description 拒绝审核 buildReqGetOrPostTyped
 * @url /admin/withdraw/reject
 */
export interface IAdminWithdrawRejectPost{
	id?: number; // id
	remark?: string; // 备注
}

/**
 * @description 构造企业微信登录链接 buildReqGetOrPostTyped
 * @url /admin/wwlogin/url
 */
export interface IAdminWwloginUrlGet{
}

/**
 * @description 获取旅程消息 buildReqGetOrPostTyped
 * @url /channel/follow/notify/record
 */
export interface IChannelFollowNotifyRecordGet{
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 渠道信息 buildReqGetOrPostTyped
 * @url /channel/info
 */
export interface IChannelInfoGet{
}

/**
 * @description 渠道登录 buildReqGetOrPostTyped
 * @url /channel/login
 */
export interface IChannelLoginPost{
	loginName: string; // 用户名
	password: string; // 密码
}

/**
 * @description 修改密码 buildReqGetOrPostTyped
 * @url /channel/password
 */
export interface IChannelPasswordPost{
	newPassword: string;
	oldPassword: string;
}

/**
 * @description 获取线索详情 buildReqGetOrPostTyped
 * @url /channel/thread/detail
 */
export interface IChannelThreadDetailGet{
	investorId: number;
}

/**
 * @description 获取旅程列表 buildReqGetOrPostTyped
 * @url /channel/thread/follow/record
 */
export interface IChannelThreadFollowRecordGet{
	investorId: number;
	pageSize?: number;
	pageNum?: number;
}

/**
 * @description 获取线索列表 buildReqGetOrPostTyped
 * @url /channel/thread/list
 */
export interface IChannelThreadListGet{
	keyword?: string;
	city?: string;
	province?: string;
	tranStatus?: number; // 0-未签约 1-签约 2-复购 9-退出
	customerStatus?: number; // 0-未跟进 1-已跟进 9-已释放
	pageSize?: number;
	pageNum?: number;
	isConclude?: number; // 签约客户查询 固定值：1
}

/**
 * @description 添加线索 buildReqGetOrPostTyped
 * @url /channel/thread
 */
export interface IChannelThreadPost{
	city?: string; // 城市
	email?: string; // 邮箱
	phone: string; // 手机号
	remark?: string; // 备注
	userName: string; // 用户名
	wechat?: string; // 微信号
	wechatName?: string; // 微信昵称
}

/**
 * @description 项目详情 buildReqGetOrPostTyped
 * @url /common/product/{id}
 */
export interface ICommonProductIdGet{
}

/**
 * @description 项目列表 buildReqGetOrPostTyped
 * @url /common/product/list
 */
export interface ICommonProductListGet{
	name?: string; // 产品名称
	type?: string; // 产品类型
	pageNum?: number;
	pageSize?: number;
	regionCategory?: string; // 地区类别 1-农业地区 2-高失业地区 3-基建项目 4-一般地区
	law?: number; // 法律 1新法 0老法
	sellStatus?: number; // 售罄状态 0-未售完 1已售完
}

/**
 * @description 获取产品相关内容 buildReqGetOrPostTyped
 * @url /common/product/relevant/content
 */
export interface ICommonProductRelevantContentGet{
	productId: number; // 产品ID
	type?: string; // news ｜ video ｜ image ｜ file
}

/**
 * @description 发送手机验证码 buildReqGetOrPostTyped
 * @url /common/send/phone/code
 */
export interface ICommonSendPhoneCodePost{
	bizType: string; // 业务类型 目前有 register，login
	phone: string; // 手机号码
}

/**
 * @description 修改图像 buildReqFileTyped
 * @url /investor/avatar/modify
 */
export interface IInvestorAvatarModifyPostFormData extends FormData{
	append: (name: 'files', value: string | Blob, fileName?: string) => void;
}

/**
 * @description 绑定/换绑 银行卡信息 buildReqGetOrPostTyped
 * @url /investor/bank/account/bind
 */
export interface IInvestorBankAccountBindPost{
	bankName: string; // 银行名称
	bankNumber: string; // 银行卡
	bankUserName: string; // 开户名
}

/**
 * @description 获取银行卡信息 buildReqGetOrPostTyped
 * @url /investor/bank/account
 */
export interface IInvestorBankAccountGet{
}

/**
 * @description 解绑 银行卡信息 buildReqGetOrPostTyped
 * @url /investor/bank/account/unbind
 */
export interface IInvestorBankAccountUnbindPost{
}

/**
 * @description 绑定邮箱 buildReqGetOrPostTyped
 * @url /investor/bindEmail
 */
export interface IInvestorBindEmailPost{
	code: string; // 验证码
	newEmail: string; // 新邮箱
}

/**
 * @description 我的顾问 buildReqGetOrPostTyped
 * @url /investor/broker/list
 */
export interface IInvestorBrokerListGet{
	status?: number; // 状态 0-当前 1-历史
	orderId?: number; // 订单id
}

/**
 * @description 选择合格投资者regs/regd buildReqGetOrPostTyped
 * @url /investor/chooseIdentity
 */
export interface IInvestorChooseIdentityPost{
	type: number; // 投资者身份，1-Reg S，2-Reg D
}

/**
 * @description 删除收藏 buildReqGetOrPostTyped
 * @url /investor/collection/{collectionNo}
 */
export interface IInvestorCollectionCollectionNoDelete{
}

/**
 * @description 收藏列表-直播 buildReqGetOrPostTyped
 * @url /investor/collection/live
 */
export interface IInvestorCollectionLiveGet{
	type?: string; // PROJECT:项目 LIVE:直播 NEWS:新闻
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 收藏列表-新闻 buildReqGetOrPostTyped
 * @url /investor/collection/news
 */
export interface IInvestorCollectionNewsGet{
	type?: string; // PROJECT:项目 LIVE:直播 NEWS:新闻
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 新增收藏 buildReqGetOrPostTyped
 * @url /investor/collection
 */
export interface IInvestorCollectionPost{
	objId?: number; // 对象ID
	objType?: string; // 对象类型 PROJECT:项目  LIVE:直播  NEWS:文章
}

/**
 * @description 收藏列表-项目 buildReqGetOrPostTyped
 * @url /investor/collection/project
 */
export interface IInvestorCollectionProjectGet{
	type?: string; // PROJECT:项目 LIVE:直播 NEWS:新闻
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 我的文案 buildReqGetOrPostTyped
 * @url /investor/copywriting/list
 */
export interface IInvestorCopywritingListGet{
	status?: number; // 状态 0-当前 1-历史
	orderId?: number; // 订单id
}

/**
 * @description 我的优惠券 buildReqGetOrPostTyped
 * @url /investor/coupon
 */
export interface IInvestorCouponGet{
	pageSize?: number;
	pageNum?: number;
	category?: string; // 类别 PLATFORM:平台 OTHER:其他
	couponType?: number; // 类型 0-预定费 1-咨询费 2-律师费
}

/**
 * @description 领取转让的优惠券 buildReqGetOrPostTyped
 * @url /investor/coupon/receive
 */
export interface IInvestorCouponReceivePost{
	transferNo: number;
}

/**
 * @description 获取转让优惠券 buildReqGetOrPostTyped
 * @url /investor/coupon/transfer
 */
export interface IInvestorCouponTransferGet{
	transferNo?: string; // 转让编号
}

/**
 * @description 获取我的转让列表 buildReqGetOrPostTyped
 * @url /investor/coupon/transfer/list
 */
export interface IInvestorCouponTransferListGet{
}

/**
 * @description 优惠券转让 buildReqGetOrPostTyped
 * @url /investor/coupon/transfer
 */
export interface IInvestorCouponTransferPost{
	invCouponId: number;
}

/**
 * @description 我的客服 buildReqGetOrPostTyped
 * @url /investor/customer/list
 */
export interface IInvestorCustomerListGet{
	status?: number; // 状态 0-当前 1-历史
	orderId?: number; // 订单ID
}

/**
 * @description EB-5基金 buildReqGetOrPostTyped
 * @url /investor/eb5fund/list
 */
export interface IInvestorEb5fundListGet{
}

/**
 * @description 绑定邮箱-发送验证邮件 buildReqGetOrPostTyped
 * @url /investor/email/bind
 */
export interface IInvestorEmailBindPost{
	email: string; // 邮箱
}

/**
 * @description 解绑邮箱-发送验证邮件 buildReqGetOrPostTyped
 * @url /investor/email/unbind
 */
export interface IInvestorEmailUnbindPost{
}

/**
 * @description 文件列表 buildReqGetOrPostTyped
 * @url /investor/file/list
 */
export interface IInvestorFileListGet{
	pageNum?: number;
	pageSize?: number;
	componentId?: number; // 组件ID
	orderSubId?: number; // 子订单ID
	orderId?: number; // 订单ID
}

/**
 * @description 历史文件 buildReqGetOrPostTyped
 * @url /investor/history/file/list
 */
export interface IInvestorHistoryFileListGet{
	orderSubId?: number; // 子订单ID
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 邀请码信息 buildReqGetOrPostTyped
 * @url /investor/invitation/info
 */
export interface IInvestorInvitationInfoGet{
}

/**
 * @description 邀请记录 buildReqGetOrPostTyped
 * @url /investor/invitation/list
 */
export interface IInvestorInvitationListGet{
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 邀请记录订单列表 buildReqGetOrPostTyped
 * @url /investor/invitation/order/list
 */
export interface IInvestorInvitationOrderListGet{
	pageNum?: number;
	pageSize?: number;
	hisId?: number;
}

/**
 * @description 我的律师 buildReqGetOrPostTyped
 * @url /investor/lawyer/list
 */
export interface IInvestorLawyerListGet{
	status?: number; // 状态 0-当前 1-历史
	orderId?: number; // 订单ID
}

/**
 * @description 修改密码 buildReqGetOrPostTyped
 * @url /investor/modifyPassword
 */
export interface IInvestorModifyPasswordPost{
	newPassword?: string; // 新密码
	oldPassword?: string; // 旧密码
}

/**
 * @description 消息列表 buildReqGetOrPostTyped
 * @url /investor/notification
 */
export interface IInvestorNotificationGet{
	category?: string; // SUBSCRIBE:订阅  SYSTEM:系统消息
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 消息详情 buildReqGetOrPostTyped
 * @url /investor/notification/{id}
 */
export interface IInvestorNotificationIdGet{
}

/**
 * @description 标记已读 buildReqGetOrPostTyped
 * @url /investor/notification/read
 */
export interface IInvestorNotificationReadPost{
	ids: any[];
}

/**
 * @description 获取未读数 buildReqGetOrPostTyped
 * @url /investor/notification/unread/count
 */
export interface IInvestorNotificationUnreadCountGet{
}

/**
 * @description 取消订单 buildReqGetOrPostTyped
 * @url /investor/order/cancel
 */
export interface IInvestorOrderCancelPost{
	orderId: number; // 订单ID
}

/**
 * @description 创建订单 buildReqGetOrPostTyped
 * @url /investor/order/create
 */
export interface IInvestorOrderCreatePost{
	productType: string; // 类型 EB-5
}

/**
 * @description 订单列表 buildReqGetOrPostTyped
 * @url /investor/order/list
 */
export interface IInvestorOrderListGet{
	pageNum?: number;
	pageSize?: number;
	orderStatus?: number; // 订单状态 0-进行中 1-已完成 100-已取消
}

/**
 * @description 查询订单操作记录 buildReqGetOrPostTyped
 * @url /investor/order/oper/record
 */
export interface IInvestorOrderOperRecordGet{
	objId?: number; // 对象ID
	objType?: string; // 对象类型
	componentId?: number; // 组件ID
	phaseChildId?: number; // 步骤ID
	phaseId?: number; // 阶段ID
	pageNum?: number;
	pageSize?: number;
	orderId?: number; // 订单ID
}

/**
 * @description 订单详情 buildReqGetOrPostTyped
 * @url /investor/order/{orderId}
 */
export interface IInvestorOrderOrderIdGet{
}

/**
 * @description 查询我的预约 buildReqGetOrPostTyped
 * @url /investor/order/reserve
 */
export interface IInvestorOrderReserveGet{
	productType?: string; // 产品类型 ['EB-5','EB-1A','NIW'];
}

/**
 * @description 预约项目订单 buildReqGetOrPostTyped
 * @url /investor/order/reserve
 */
export interface IInvestorOrderReservePost{
	productType: string; // 产品类型
}

/**
 * @description 签署回调 buildReqGetOrPostTyped
 * @url /investor/order/sign/callback
 */
export interface IInvestorOrderSignCallbackPost{
	code: string;
	componentList: any[]; // 签署组件列表
	signNo: string;
}

/**
 * @description 查询子订单状态 buildReqGetOrPostTyped
 * @url /investor/order/status/{orderSubId}
 */
export interface IInvestorOrderStatusOrderSubIdGet{
}

/**
 * @description 完成订单步骤 buildReqGetOrPostTyped
 * @url /investor/order/step
 */
export interface IInvestorOrderStepPut{
	componentId: number; // 组件ID
	orderId: number; // 订单ID
	orderSubId: number; // 子订单ID
	valueObject: any;
}

/**
 * @description 申请产品相关内容查看权限 buildReqGetOrPostTyped
 * @url /investor/product/relevant/perms
 */
export interface IInvestorProductRelevantPermsPost{
	id: number; // 内容ID
}

/**
 * @description 获取个人资料 buildReqGetOrPostTyped
 * @url /investor/profile/detail
 */
export interface IInvestorProfileDetailGet{
}

/**
 * @description 修改个人资料 buildReqGetOrPostTyped
 * @url /investor/profile/modify
 */
export interface IInvestorProfileModifyPost{
	birthday: string; // 出生日期
	city?: string; // 城市
	country: string; // 国家
	currentAddress?: string; // 当前地址
	firstName: string; // 名 微信返回的nickname保存至此字段
	gender?: number; // 0:male;1:female,2:unknown
	lastName: string; // 姓
	phoneNumber: string; // 手机号
	province: string; // 洲/省
	zipCode?: string; // 邮政编码
}

/**
 * @description 添加新印章 buildReqGetOrPostTyped
 * @url /investor/seal/create
 */
export interface IInvestorSealCreatePost{
	holder?: string; // 印章所有人
	imgUrl?: string; // 印章图片url
}

/**
 * @description 获取印章列表 buildReqGetOrPostTyped
 * @url /investor/seal/list
 */
export interface IInvestorSealListGet{
}

/**
 * @description 查看印章 buildReqGetOrPostTyped
 * @url /investor/seal/record/info
 */
export interface IInvestorSealRecordInfoPost{
	id: number; // 印章id
}

/**
 * @description 吊销印章 buildReqGetOrPostTyped
 * @url /investor/seal/record/withdraw
 */
export interface IInvestorSealRecordWithdrawPost{
	id: number; // 印章id
}

/**
 * @description 我的服务 buildReqGetOrPostTyped
 * @url /investor/service/list
 */
export interface IInvestorServiceListGet{
	status?: number; // 状态 0-当前 1-历史
	orderId?: number; // 订单id
}

/**
 * @description 订阅数据 buildReqGetOrPostTyped
 * @url /investor/subscribe/info
 */
export interface IInvestorSubscribeInfoGet{
}

/**
 * @description 订阅 buildReqGetOrPostTyped
 * @url /investor/subscribe
 */
export interface IInvestorSubscribePost{
	subscribeNode: string; // 订阅节点 （订阅数据里的nodeKey）
}

/**
 * @description 查询待办列表 buildReqGetOrPostTyped
 * @url /investor/todo/list
 */
export interface IInvestorTodoListGet{
	title?: string;
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 解绑邮箱,需先关闭2FA buildReqGetOrPostTyped
 * @url /investor/unbindEmail
 */
export interface IInvestorUnbindEmailPost{
	code: string; // 验证码
}

/**
 * @description 取消订阅 buildReqGetOrPostTyped
 * @url /investor/unsubscribe
 */
export interface IInvestorUnsubscribePost{
	subscribeNode: string;
}

/**
 * @description 投资记录 buildReqGetOrPostTyped
 * @url /investor/wallet/deposit/list
 */
export interface IInvestorWalletDepositListGet{
	pageNum?: number;
	pageSize?: number;
	orderId?: number; // 订单ID
}

/**
 * @description 钱包详情 buildReqGetOrPostTyped
 * @url /investor/wallet/info
 */
export interface IInvestorWalletInfoGet{
	orderId?: number; // 订单ID
}

/**
 * @description 订单支付记录 buildReqGetOrPostTyped
 * @url /investor/wallet/orderpay/list
 */
export interface IInvestorWalletOrderpayListGet{
	pageNum?: number;
	pageSize?: number;
	orderId?: number; // 订单ID
}

/**
 * @description 反俑记录 buildReqGetOrPostTyped
 * @url /investor/wallet/rebate/list
 */
export interface IInvestorWalletRebateListGet{
	pageNum?: number;
	pageSize?: number;
}

/**
 * @description 获取对公账户 buildReqGetOrPostTyped
 * @url /publish/corporate/account
 */
export interface IPublishCorporateAccountGet{
}

/**
 * @description 通过父id获取下级列表 buildReqGetOrPostTyped
 * @url /publish/country/children/{parentId}
 */
export interface IPublishCountryChildrenParentIdGet{
}

/**
 * @description 获取所有国家 buildReqGetOrPostTyped
 * @url /publish/country/list
 */
export interface IPublishCountryListGet{
	chName?: string; // 中文名称
}

/**
 * @description 上传文件-私有 buildReqFileTyped
 * @url /publish/file/private/upload
 */
export interface IPublishFilePrivateUploadPostFormData extends FormData{
	append: (name: 'files', value: string | Blob, fileName?: string) => void;
}

/**
 * @description 获取私有文件签名地址 buildReqGetOrPostTyped
 * @url /publish/file/signatureUrl
 */
export interface IPublishFileSignatureUrlGet{
	url: string; // oss图片地址
}

/**
 * @description 上传文件-公共 buildReqFileTyped
 * @url /publish/file/upload
 */
export interface IPublishFileUploadPostFormData extends FormData{
	append: (name: 'files', value: string | Blob, fileName?: string) => void;
}

/**
 * @description 获取邀请规则 buildReqGetOrPostTyped
 * @url /publish/invitation/rule
 */
export interface IPublishInvitationRuleGet{
}

/**
 * @description 忘记密码-发送重置密码链接邮件 buildReqGetOrPostTyped
 * @url /tourist/email/forgetPasswordSend
 */
export interface ITouristEmailForgetPasswordSendPost{
	email: string; // 邮箱
}

/**
 * @description 注册-发送邮箱验证码 buildReqGetOrPostTyped
 * @url /tourist/email/registerCode
 */
export interface ITouristEmailRegisterCodePost{
	email: string; // 邮箱
}

/**
 * @description 重置密码 buildReqGetOrPostTyped
 * @url /tourist/forgetPassword
 */
export interface ITouristForgetPasswordPost{
	code: string; // code
	password: string; // 新密码
}

/**
 * @description 登录-手机 buildReqGetOrPostTyped
 * @url /tourist/login/phone
 */
export interface ITouristLoginPhonePost{
	code: string; // 验证码
	phone: string; // 手机号
	uuid: string; // 验证码token
}

/**
 * @description 登录 buildReqGetOrPostTyped
 * @url /tourist/login
 */
export interface ITouristLoginPost{
	email: string; // 邮箱
	googleCode?: string; // 谷歌验证码；绑定并开启时需要传。
	password: string; // 密码
}

/**
 * @description 注册-手机 buildReqGetOrPostTyped
 * @url /tourist/register/phone
 */
export interface ITouristRegisterPhonePost{
	code: string; // 验证码
	invitationNo?: string; // 邀请链接no
	password: string; // 登录密码
	phone: string; // 手机号
	uuid: string; // 验证码token
}

/**
 * @description 注册 buildReqGetOrPostTyped
 * @url /tourist/register
 */
export interface ITouristRegisterPost{
	code: string; // 验证码
	email: string; // 邮箱
	invitationNo?: string; // 邀请链接no
	password: string; // 登录密码
}

/**
 * @description 注册企业微信客户端第三方应用鉴权信息 buildReqGetOrPostTyped
 * @url /wechat/agentSignature/config
 */
export interface IWechatAgentSignatureConfigGet{
	url: string;
	appType?: string; // 任务中心应用 传固定值 todo
}

/**
 * @description 注册企业微信客户端js接口鉴权信息 buildReqGetOrPostTyped
 * @url /wechat/jsSignature/config
 */
export interface IWechatJsSignatureConfigGet{
	url: string;
	appType?: string; // 任务中心应用 传固定值 todo
}

/**
 * @description 企业微信构造网页授权链接回调地址 获取用户敏感信息 需要客户端授权操作（可静默） buildReqGetOrPostTyped
 * @url /wechat/oauth2/authorize
 */
export interface IWechatOauth2AuthorizeGet{
	page?: string; // 跳转页面路径 如 user.html
	appType?: string; // 任务中心应用 传固定值 todo
}

export default {
	IAdminAppVersionDetailGet,
	IAdminAppVersionIdDelete,
	IAdminAppVersionListGet,
	IAdminAppVersionNameGet,
	IAdminAppVersionPost,
	IAdminAppVersionPut,
	IAdminChannelIdGet,
	IAdminChannelListGet,
	IAdminChannelPost,
	IAdminChannelPut,
	IAdminChannelResetPasswordPut,
	IAdminCommonCaptchaImageGet,
	IAdminCommonCountryChildrenParentIdGet,
	IAdminCommonCountryListGet,
	IAdminConsoleChartOriginGet,
	IAdminConsoleChartSeaDayGet,
	IAdminConsoleChartSeaGet,
	IAdminConsoleConcludeRankTypeGet,
	IAdminConsoleStatisticsInfoGet,
	IAdminContractAttrRefPost,
	IAdminContractIdDelete,
	IAdminContractIdGet,
	IAdminContractListGet,
	IAdminContractPost,
	IAdminContractPut,
	IAdminCorporateAccountIdDelete,
	IAdminCorporateAccountIdGet,
	IAdminCorporateAccountListGet,
	IAdminCorporateAccountPost,
	IAdminCorporateAccountPut,
	IAdminCouponIdGet,
	IAdminCouponInvestorListGet,
	IAdminCouponListGet,
	IAdminCouponPost,
	IAdminCouponPut,
	IAdminCouponSendInvestorPost,
	IAdminCouponWriteoffPost,
	IAdminDepositInvestorOrderListGet,
	IAdminDepositListGet,
	IAdminDepositPost,
	IAdminDeptAllocationRuleGet,
	IAdminDeptAllocationRulePost,
	IAdminDeptIdDelete,
	IAdminDeptIdGet,
	IAdminDeptListGet,
	IAdminDeptPost,
	IAdminDeptPut,
	IAdminFlowClonePost,
	IAdminFlowIdDelete,
	IAdminFlowIdGet,
	IAdminFlowListGet,
	IAdminFlowPost,
	IAdminFlowPut,
	IAdminFundIdGet,
	IAdminFundListGet,
	IAdminFundPost,
	IAdminFundPut,
	IAdminFundTypeListGet,
	IAdminInfoGet,
	IAdminInvestorInviteeListGet,
	IAdminInvestorListGet,
	IAdminInvestorOrderListGet,
	IAdminInvestorProductRelevantListGet,
	IAdminInvestorProductRelevantPost,
	IAdminInvestorRecordAddPost,
	IAdminInvestorRecordBasicGet,
	IAdminInvestorRecordUpdatePut,
	IAdminInvestorRepeatPwdEmailPost,
	IAdminInvestorTokenPost,
	IAdminInvestorWalletBankAccountGet,
	IAdminInvestorWalletBankAccountPost,
	IAdminInvestorWalletDepositListGet,
	IAdminInvestorWalletInfoIdGet,
	IAdminInvestorWalletOrderpayListGet,
	IAdminInvestorWalletRebateListGet,
	IAdminInvitationRuleGet,
	IAdminInvitationRulePost,
	IAdminLoginPost,
	IAdminMaterialExistGet,
	IAdminMaterialIdDelete,
	IAdminMaterialListGet,
	IAdminMaterialPut,
	IAdminMaterialRecoverPost,
	IAdminMaterialRecycleListGet,
	IAdminMaterialTagIdDelete,
	IAdminMaterialTagListAllGet,
	IAdminMaterialTagListGet,
	IAdminMaterialTagPost,
	IAdminMaterialTagPut,
	IAdminMaterialUploadPostFormData,
	IAdminMenuListGet,
	IAdminMenuMenuIdDelete,
	IAdminMenuMenuIdGet,
	IAdminMenuPost,
	IAdminMenuPut,
	IAdminMenusGet,
	IAdminNotificationIdDelete,
	IAdminNotificationIdGet,
	IAdminNotificationListGet,
	IAdminNotificationPost,
	IAdminOrderBasicInfoPut,
	IAdminOrderBrokerBindPost,
	IAdminOrderBrokerListGet,
	IAdminOrderCancelPost,
	IAdminOrderCopywritingBindPost,
	IAdminOrderCopywritingListGet,
	IAdminOrderCreatePost,
	IAdminOrderCustomerBindPost,
	IAdminOrderCustomerListGet,
	IAdminOrderLawyerBindPost,
	IAdminOrderLawyerListGet,
	IAdminOrderListGet,
	IAdminOrderOrderNoGet,
	IAdminOrderPayListGet,
	IAdminOrderPhaseStatusPost,
	IAdminOrderProductBindPost,
	IAdminOrderStepPut,
	IAdminOrderSubContentComponentIdOrderSubIdDelete,
	IAdminOrderSubContentPost,
	IAdminOrderSubContentPut,
	IAdminOrderSubTitlePut,
	IAdminOrderSubVerifyPost,
	IAdminOrderTransferInsidePost,
	IAdminOrderTransferInsideTypeListGet,
	IAdminOrderWalletDepositListGet,
	IAdminOrderWalletGet,
	IAdminOrderWalletOrderpayListGet,
	IAdminOriginIdGet,
	IAdminOriginListGet,
	IAdminOriginPost,
	IAdminOriginPut,
	IAdminProductBindFlowPost,
	IAdminProductContentPut,
	IAdminProductFlowAlllistGet,
	IAdminProductFlowListGet,
	IAdminProductIdDelete,
	IAdminProductIdGet,
	IAdminProductListGet,
	IAdminProductPost,
	IAdminProductPut,
	IAdminProductRecycleListGet,
	IAdminProductRelevantAuditListGet,
	IAdminProductRelevantAuditPost,
	IAdminProductRelevantFileGet,
	IAdminProductRelevantFilePost,
	IAdminProductRelevantGroupGroupIdDelete,
	IAdminProductRelevantGroupGroupIdDeleteGroup,
	IAdminProductRelevantGroupListGet,
	IAdminProductRelevantGroupPost,
	IAdminProductRelevantGroupPut,
	IAdminProductRelevantGroupSortPost,
	IAdminProductRelevantIdDelete,
	IAdminProductRelevantImageGet,
	IAdminProductRelevantImagePost,
	IAdminProductRelevantLevelListGet,
	IAdminProductRelevantLevelPost,
	IAdminProductRelevantLevelPut,
	IAdminProductRelevantNewsGet,
	IAdminProductRelevantNewsPost,
	IAdminProductRelevantPut,
	IAdminProductRelevantSortPost,
	IAdminProductRelevantVideoGet,
	IAdminProductRelevantVideoPost,
	IAdminProductRevokePost,
	IAdminProductShowStatusPost,
	IAdminProductSortPut,
	IAdminPublishBankcardinfoGet,
	IAdminPublishBrokerListGet,
	IAdminPublishContractComponentGet,
	IAdminPublishContractListGet,
	IAdminPublishCopywritingListGet,
	IAdminPublishCustomerListGet,
	IAdminPublishDeptListGet,
	IAdminPublishDeptOwnerlistGet,
	IAdminPublishFileSignatureUrlGet,
	IAdminPublishFlowListGet,
	IAdminPublishFundListGet,
	IAdminPublishInvestorListGet,
	IAdminPublishLawyerListGet,
	IAdminPublishMaterialListGet,
	IAdminPublishNewsListGet,
	IAdminPublishOperatorListGet,
	IAdminPublishOriginListGet,
	IAdminPublishPhoneCodeListGet,
	IAdminPublishProductListGet,
	IAdminPublishProductSaleListGet,
	IAdminPublishProductTypeListGet,
	IAdminPublishPublishSysUserCityListGet,
	IAdminPublishReasonListTypeGet,
	IAdminPublishSeaListGet,
	IAdminPublishSysChannelListGet,
	IAdminPublishSysUserListByLoginUserGet,
	IAdminPublishTagListGet,
	IAdminPublishThreadListByLoginUserGet,
	IAdminPublishThreadListGet,
	IAdminPublishTodoCategoryListGet,
	IAdminPublishUploadFilePostFormData,
	IAdminPublishUploadPrivateFilePostFormData,
	IAdminReasonIdDelete,
	IAdminReasonIdGet,
	IAdminReasonListTypeGet,
	IAdminReasonListTypeGetGroup,
	IAdminReasonPost,
	IAdminReasonPut,
	IAdminReasonStatusPut,
	IAdminRebateListGet,
	IAdminRebatePost,
	IAdminReserveAuditPost,
	IAdminReserveListGet,
	IAdminRoleListAllGet,
	IAdminRoleListGet,
	IAdminRolePermsPut,
	IAdminRolePost,
	IAdminRolePut,
	IAdminRoleRoleIdDelete,
	IAdminRoleRoleIdGet,
	IAdminSeaIdDelete,
	IAdminSeaIdGet,
	IAdminSeaJoinUserJoinIdDelete,
	IAdminSeaJoinUserListGet,
	IAdminSeaJoinUserPost,
	IAdminSeaListGet,
	IAdminSeaPost,
	IAdminSeaPut,
	IAdminTagGroupChoicePut,
	IAdminTagGroupGroupIdDelete,
	IAdminTagGroupListGet,
	IAdminTagGroupPost,
	IAdminTagGroupPut,
	IAdminTagGroupStatusPut,
	IAdminTagListByGroupIdGet,
	IAdminTagPost,
	IAdminTagPut,
	IAdminTagStatusPut,
	IAdminTagSyncPost,
	IAdminTagTagIdDelete,
	IAdminThreadAddDeptToThreadPost,
	IAdminThreadAddThreadToDeptPost,
	IAdminThreadAllListGet,
	IAdminThreadAllocationPost,
	IAdminThreadApplyAuditPost,
	IAdminThreadApplyPost,
	IAdminThreadAuditDetailIdGet,
	IAdminThreadAuditListTypeGet,
	IAdminThreadAuditListTypeGetGroup,
	IAdminThreadAuditPost,
	IAdminThreadBatchAddDeptToThreadPost,
	IAdminThreadBatchAllocationPost,
	IAdminThreadCallPhonePost,
	IAdminThreadCheckDxLoginPost,
	IAdminThreadCustomerProductPost,
	IAdminThreadCustomerStatusPost,
	IAdminThreadDeletePost,
	IAdminThreadDelThreadForDeptPost,
	IAdminThreadDeptListGet,
	IAdminThreadDownloadPost,
	IAdminThreadEmployeeConcludeDetailGet,
	IAdminThreadEmployeeConcludeIdDelete,
	IAdminThreadEmployeeConcludeListGet,
	IAdminThreadEmployeeConcludePost,
	IAdminThreadEmployeeConcludePut,
	IAdminThreadEmployeeConcludeRankTypeGet,
	IAdminThreadExportListGet,
	IAdminThreadExportPost,
	IAdminThreadExternalExternalUserIdGet,
	IAdminThreadFollowRecordGet,
	IAdminThreadFollowRecordPost,
	IAdminThreadFollowStatusPut,
	IAdminThreadGiveupPost,
	IAdminThreadIdGet,
	IAdminThreadImportantPost,
	IAdminThreadListGet,
	IAdminThreadMergeBaseInfoPost,
	IAdminThreadMergeFollowRecordPost,
	IAdminThreadMergePost,
	IAdminThreadMineListGet,
	IAdminThreadPersonageTagAllDelete,
	IAdminThreadPersonageTagAlllistGet,
	IAdminThreadPersonageTagIdDelete,
	IAdminThreadPersonageTagMinelistGet,
	IAdminThreadPersonageTagPost,
	IAdminThreadPhoneHashcodePost,
	IAdminThreadPost,
	IAdminThreadPrimaryFollowerListGet,
	IAdminThreadPrimaryFollowerPost,
	IAdminThreadPublicAllListGet,
	IAdminThreadPut,
	IAdminThreadReceivePost,
	IAdminThreadRecycleListGet,
	IAdminThreadRevokePost,
	IAdminThreadSmsPhonePost,
	IAdminThreadStatusListGet,
	IAdminThreadTagPut,
	IAdminThreadTransferPost,
	IAdminThreadTranStatusApplyPost,
	IAdminThreadTranStatusPost,
	IAdminThreadUnfollowRemindInfoGet,
	IAdminThreadUnfollowRemindListGet,
	IAdminThreadUserGroupListGet,
	IAdminThreadUserGroupPost,
	IAdminTodoBatchPost,
	IAdminTodoChangeListGet,
	IAdminTodoCommentListGet,
	IAdminTodoCommentPost,
	IAdminTodoCompletePost,
	IAdminTodoDetailCompletePost,
	IAdminTodoDetailInfoGet,
	IAdminTodoDetailListGet,
	IAdminTodoDetailPost,
	IAdminTodoDetailPut,
	IAdminTodoInfoGet,
	IAdminTodoLeaderListGet,
	IAdminTodoListGet,
	IAdminTodoOwnerDeptListGet,
	IAdminTodoPost,
	IAdminTodoPut,
	IAdminTodoReplyPost,
	IAdminTodoSubCompletePost,
	IAdminTodoSubDetailGet,
	IAdminTodoSubListGet,
	IAdminTodoSubPost,
	IAdminTodoSubPut,
	IAdminUpdatePwdPut,
	IAdminUserListGet,
	IAdminUserMoveUserPost,
	IAdminUserPost,
	IAdminUserProfilePut,
	IAdminUserPut,
	IAdminUserRelevantUserToDeptPost,
	IAdminUserResetPwdPut,
	IAdminUserRolekeyGet,
	IAdminUserUserIdDelete,
	IAdminUserUserIdGet,
	IAdminWebloginBindPost,
	IAdminWebloginSendEmailPost,
	IAdminWithdrawIdGet,
	IAdminWithdrawListGet,
	IAdminWithdrawPassPost,
	IAdminWithdrawRejectPost,
	IAdminWwloginUrlGet,
	IChannelFollowNotifyRecordGet,
	IChannelInfoGet,
	IChannelLoginPost,
	IChannelPasswordPost,
	IChannelThreadDetailGet,
	IChannelThreadFollowRecordGet,
	IChannelThreadListGet,
	IChannelThreadPost,
	ICommonProductIdGet,
	ICommonProductListGet,
	ICommonProductRelevantContentGet,
	ICommonSendPhoneCodePost,
	IInvestorAvatarModifyPostFormData,
	IInvestorBankAccountBindPost,
	IInvestorBankAccountGet,
	IInvestorBankAccountUnbindPost,
	IInvestorBindEmailPost,
	IInvestorBrokerListGet,
	IInvestorChooseIdentityPost,
	IInvestorCollectionCollectionNoDelete,
	IInvestorCollectionLiveGet,
	IInvestorCollectionNewsGet,
	IInvestorCollectionPost,
	IInvestorCollectionProjectGet,
	IInvestorCopywritingListGet,
	IInvestorCouponGet,
	IInvestorCouponReceivePost,
	IInvestorCouponTransferGet,
	IInvestorCouponTransferListGet,
	IInvestorCouponTransferPost,
	IInvestorCustomerListGet,
	IInvestorEb5fundListGet,
	IInvestorEmailBindPost,
	IInvestorEmailUnbindPost,
	IInvestorFileListGet,
	IInvestorHistoryFileListGet,
	IInvestorInvitationInfoGet,
	IInvestorInvitationListGet,
	IInvestorInvitationOrderListGet,
	IInvestorLawyerListGet,
	IInvestorModifyPasswordPost,
	IInvestorNotificationGet,
	IInvestorNotificationIdGet,
	IInvestorNotificationReadPost,
	IInvestorNotificationUnreadCountGet,
	IInvestorOrderCancelPost,
	IInvestorOrderCreatePost,
	IInvestorOrderListGet,
	IInvestorOrderOperRecordGet,
	IInvestorOrderOrderIdGet,
	IInvestorOrderReserveGet,
	IInvestorOrderReservePost,
	IInvestorOrderSignCallbackPost,
	IInvestorOrderStatusOrderSubIdGet,
	IInvestorOrderStepPut,
	IInvestorProductRelevantPermsPost,
	IInvestorProfileDetailGet,
	IInvestorProfileModifyPost,
	IInvestorSealCreatePost,
	IInvestorSealListGet,
	IInvestorSealRecordInfoPost,
	IInvestorSealRecordWithdrawPost,
	IInvestorServiceListGet,
	IInvestorSubscribeInfoGet,
	IInvestorSubscribePost,
	IInvestorTodoListGet,
	IInvestorUnbindEmailPost,
	IInvestorUnsubscribePost,
	IInvestorWalletDepositListGet,
	IInvestorWalletInfoGet,
	IInvestorWalletOrderpayListGet,
	IInvestorWalletRebateListGet,
	IPublishCorporateAccountGet,
	IPublishCountryChildrenParentIdGet,
	IPublishCountryListGet,
	IPublishFilePrivateUploadPostFormData,
	IPublishFileSignatureUrlGet,
	IPublishFileUploadPostFormData,
	IPublishInvitationRuleGet,
	ITouristEmailForgetPasswordSendPost,
	ITouristEmailRegisterCodePost,
	ITouristForgetPasswordPost,
	ITouristLoginPhonePost,
	ITouristLoginPost,
	ITouristRegisterPhonePost,
	ITouristRegisterPost,
	IWechatAgentSignatureConfigGet,
	IWechatJsSignatureConfigGet,
	IWechatOauth2AuthorizeGet,
}