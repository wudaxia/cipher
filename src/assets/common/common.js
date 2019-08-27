//主管看到的导航栏
const navList =
    [
        {
            title: "密码器",
            twoNavList: [
                {
                    name: "密码器初始化",
                    img: require("../../assets/image/init.png"),
                    activeImg: require("../../assets/image/init1.png"),
                    url: "/machine/initMachine",
                    isShow: true
                },
                {
                    name: "密码器启用",
                    img: require("../../assets/image/start.png"),
                    activeImg: require("../../assets/image/start1.png"),
                    url: "/machine/startMachine",
                    isShow: true
                },
                {
                    name: "密码器解锁",
                    img: require("../../assets/image/unclock.png"),
                    activeImg: require("../../assets/image/unclock1.png"),
                    url: "/machine/unlockMachine",
                    isShow: true
                },
                {
                    name: "密码器停用",
                    img: require("../../assets/image/stop.png"),
                    activeImg: require("../../assets/image/stop1.png"),
                    url: "/machine/discontMachine",
                    isShow: true
                },
                {
                    name: "密码器作废",
                    img: require("../../assets/image/zuofei.png"),
                    activeImg: require("../../assets/image/zuofei1.png"),
                    url: "/machine/invalidateMachine",
                    isShow: true
                }
            ]
        },
        {
            title: "密码器账号",
            twoNavList: [
                {
                    name: "添加账号",
                    img: require("../../assets/image/add.png"),
                    activeImg: require("../../assets/image/add1.png"),
                    url: "/account/addAcount",
                    isShow: true
                },
                {
                    name: "删除账号",
                    img: require("../../assets/image/delete.png"),
                    activeImg: require("../../assets/image/delete1.png"),
                    url: "/account/deleteAccount",
                    isShow: true
                },
                {
                    name: "单独删除前台账号",
                    img: require("../../assets/image/delete.png"),
                    activeImg: require("../../assets/image/delete1.png"),
                    url: "/account/deleteQianAccount",
                    isShow: true
                },
                {
                    name: "单独删除后台账号",
                    img: require("../../assets/image/delete.png"),
                    activeImg: require("../../assets/image/delete1.png"),
                    url: "/account/deleteHouAccount",
                    isShow: true
                },
                {
                    name: "同账号增发密码器",
                    img: require("../../assets/image/zengfa.png"),
                    activeImg: require("../../assets/image/zengfa1.png"),
                    url: "/account/addAccountToNext",
                    isShow: true
                },
                {
                    name: "更改账号秘钥",
                    img: require("../../assets/image/change.png"),
                    activeImg: require("../../assets/image/change1.png"),
                    url: "/account/changeSecretKey",
                    isShow: true
                },
                {
                    name: "指定账号签名密码器",
                    img: require("../../assets/image/setMain.png"),
                    activeImg: require("../../assets/image/setMain1.png"),
                    url: "/account/setMainAccount",
                    isShow: true
                }
            ]
        },
        {
            title: "查询",
            twoNavList: [
                {
                    name: "密码器综合查询",
                    img: require("../../assets/image/maInfo.png"),
                    activeImg: require("../../assets/image/maInfo1.png"),
                    url: "/query/machineZhQuery",
                    isShow: true
                },
                {
                    name: "账号综合查询",
                    img: require("../../assets/image/acInfo.png"),
                    activeImg: require("../../assets/image/acInfo1.png"),
                    url: "/query/accountZhQuery",
                    isShow: true
                }
            ]
        },
        {
            title: "日志",
            twoNavList: [
                {
                    name: "密码器操作日志查询",
                    img: require("../../assets/image/maLog.png"),
                    activeImg: require("../../assets/image/maLog1.png"),
                    url: "/log/machineLog",
                    isShow: true
                },
                {
                    name: "密码器账号日志查询",
                    img: require("../../assets/image/acLog.png"),
                    activeImg: require("../../assets/image/acLog1.png"),
                    url: "/log/machineAcoountLog",
                    isShow: true
                },
                {
                    name: "核验日志查询",
                    img: require("../../assets/image/heLog.png"),
                    activeImg: require("../../assets/image/heLog1.png"),
                    url: "/log/checkLog",
                    isShow: true
                }
            ]
        },
        {
            title: "核验",
            twoNavList: [
                {
                    name: "支付密码核验",
                    img: require("../../assets/image/heyan.png"),
                    activeImg: require("../../assets/image/heyan1.png"),
                    url: "/Verificate",
                    isShow: true
                },
            ]
        },
        {
            title: "用户管理",
            twoNavList: [
                {
                    name: "业务人员管理",
                    img: require("../../assets/image/staff.png"),
                    activeImg: require("../../assets/image/staff1.png"),
                    url: "/user",
                    isShow: true
                },
            ]
        }
    ]

//柜员看到的导航栏
let navList2 = navList.filter((item,index,arr)=>{
    return item.title!="用户管理"
})

//首页展示的密码器功能列表
const mainCipherList =  [
    {
        name: "密码器初始化",
        showImg: require("../../assets/image/init9.png"),
        type: "初始化",
    },
    {
        name: "密码器启用",
        showImg: require("../../assets/image/start9.png"),
        type: "启用",
    },
    {
        name: "密码器解锁",
        showImg: require("../../assets/image/unclock9.png"),
        type: "解锁",
    },
    {
        name: "密码器停用",
        showImg: require("../../assets/image/stop9.png"),
        type: "停用",
    },
    {
        name: "密码器作废",
        showImg: require("../../assets/image/zuofei9.png"),
        type: "作废",
    }
]

//首页展示的密码器账号功能列表
const mainCipherAccountList =  [
    {
        name: "添加账号",
        showImg: require("../../assets/image/addAccount9.png"),
    },
    {
        name: "删除账号",
        showImg: require("../../assets/image/deleteAccount9.png"),
    },
    {
        name: "单独删除前台账号",
        showImg: require("../../assets/image/deleteAccount9.png"),
    },
    {
        name: "单独删除后台账号",
        showImg: require("../../assets/image/deleteAccount9.png"),
        type: "初始化",
    },
    {
        name: "同账号增发密码器",
        showImg: require("../../assets/image/zengfa9.png"),
        type: "初始化",
    },
    {
        name: "更改账号秘钥",
        showImg: require("../../assets/image/change9.png"),
        type: "初始化",
    },
    {
        name: "指定账号签名密码器",
        showImg: require("../../assets/image/setMain9.png"),
        type: "初始化",
    }
]

//首页展示的核验功能列表
const mainCheckList =  [
    {
        name: "支付密码核验",
        showImg: require("../../assets/image/heyan9.png"),
    },
]

let navList1 = [...navList];
let urlList = [];

//主管搜索列表
for(let val of navList1){
    for(let val1 of val.twoNavList){
        urlList.push({
            value: val1.url,
            label:val1.name
        })
    }
}

//柜员搜索列表
let urlList2 = urlList.filter((item,index,arr)=>{
    return item.label!="业务人员管理"
})

//限制是数字格式
const isNumber = (rule, value, callback) => {
    if (!/^[a-z0-9]+$/.test(value)) {
        callback('请输入数字格式');
    }
    callback();

}

const machineIdLimit = [
    { required: true, message: '机具号不能为空', trigger: 'blur' },
    {validator: isNumber, trigger: 'blur'},
    { min:10, max:10, message: '长度是10个数字', trigger: 'blur' }
]

const machineAccountLimit = [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {validator: isNumber, trigger: 'blur'},
    {max:32, message: '长度在32个字符以内', trigger: 'blur' }
]


export default {
    navList,
    urlList,
    navList2,
    urlList2,
    mainCipherList,
    mainCipherAccountList,
    mainCheckList,
    isNumber,
    machineIdLimit,
    machineAccountLimit
}