// 保存showTeacher在浏览器上
window.localStorage.setItem("showTeacher", "false")
    // 数学系老师信息
let mathTeachers = [{
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/a86ee0b1-b7c6-4b67-888d-d196ec5b9852.jpg',
            name: '岳跃利',
            job: '教授（硕士生导师）',
            number: '',
            researchArea: '格上拓扑学',
            tele: '',
            email: 'ylyue@ouc.edu.cn',
            department: '数学系',
            office: '数学楼513'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/c26e5ba2-c71f-4488-8492-bab5ade17adf.jpg',
            name: '陈丕炜',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '拓扑学、模糊数学、数学建模',
            tele: '',
            email: 'cpw@ouc.edu.cn',
            department: '数学系',
            office: '数学楼523'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/cc/98/741a53ca41c897d8d9deaede2bd4/57b789c4-4e95-41e3-af9b-5d4ecdfc17c1.jpg',
            name: '李芙蓉',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '空间统计学 （空间/时空大数据的统计分析与建模）',
            tele: '',
            email: 'lifurong@ouc.edu.cn',
            department: '数学系',
            office: '数学楼502'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/80bc0db6-7e0f-4e6e-a1f5-a59252b31c8b.jpg',
            name: '董冉',
            job: '讲师',
            number: '',
            researchArea: '随机微分方程、随机反馈控制、统计学。',
            tele: '',
            email: 'dr@ouc.edu.cn',
            department: '数学系',
            office: '数学楼502'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/0f6100b5-96a2-4a2e-a904-9449d3a3db11.jpg',
            name: '刘祎',
            job: '讲师（硕士生导师）',
            number: '',
            researchArea: '高维数据统计分析、生存分析',
            tele: '',
            email: 'liuyi@ouc.edu.cn',
            department: '数学系',
            office: '数学楼605'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/68/10/c64f058348f5a0f250ef014ee9c1/63867dec-cc27-4e70-9334-7e3d69c629b2.jpg',
            name: '牛燕敏',
            job: '讲师',
            number: '',
            researchArea: '微分方程与动力系统、KAM理论、脉冲微分方程',
            tele: '',
            email: 'niuyanmin@ouc.edu.cn',
            department: '数学系',
            office: ''
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/41c889cd-e217-4951-8df3-5bc965e90e79.jpg',
            name: '李效敏',
            job: '教授',
            number: '',
            researchArea: '1.单复变函数和多复变函数的值分布理论；2. 解析数论中L-函数的值分布理论（包含黎曼ζ函数ζ(s)的零点分布）;3. 复解析动力系统。',
            tele: '',
            email: 'lixiaomin@ouc.edu.cn',
            department: '数学系',
            office: '数学楼'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/8491b73e-549d-462f-8408-49f6c3ed60a9.jpg',
            name: '方钟波',
            job: '教授(硕士生导师)',
            number: '',
            researchArea: '非线性偏微分方程及其应用',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/28c2c7a9-2e8f-463c-8811-8d9094f3ead7.jpg',
            name: '张宁',
            job: '教授',
            number: '',
            researchArea: '映射空间上的复分析',
            tele: '',
            email: 'nzhang@ouc.edu.cn',
            department: '数学系',
            office: '数学楼625'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/f459d3f4-63be-4db5-b87b-423cefba7c01.jpg',
            name: '姚增善',
            job: '教授',
            number: '',
            researchArea: '应用数学',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/ed0e4f68-0bec-4567-8173-4a6ccf1ce4e1.jpg',
            name: '高翔',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '微分几何、统计学习',
            tele: '',
            email: 'gaoxiang@ouc.edu.cn',
            department: '数学系',
            office: '数学楼623'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/c0219315-fb3f-48d2-adf6-4c5c385c98aa.jpg',
            name: '孙志华',
            job: '讲师',
            number: '',
            researchArea: '高维变量选择、生存分析',
            tele: '',
            email: 'zhihuasun@ouc.edu.cn',
            department: '数学系',
            office: '数学楼502'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/e1dbb866-c456-4c9e-9e04-28b32bd73513.jpg',
            name: '类淑河',
            job: '副教授',
            number: '',
            researchArea: '',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/60/20/05dcc9a64c869f8d525eaa928787/76bb6e07-9cbb-48b3-871f-a7832caa5ca2.png',
            name: '张驰',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '随机过程及交叉领域',
            tele: '',
            email: 'zhangchi@ouc.edu.cn',
            department: '数学系',
            office: '数学楼505'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/84e1429c-70c1-4ccb-9e7a-f50784c27245.jpg',
            name: '赵红',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '统计计算，应用统计',
            tele: '',
            email: 'zhaohong@ouc.edu.cn',
            department: '数学系',
            office: '数学楼505'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/fceb344f-a58b-412c-9953-a76dabbac463.jpg',
            name: '张若军',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '人工神经网络与动力系统、数学教育',
            tele: '',
            email: 'zhangruojun@ouc.edu.cn',
            department: '数学系',
            office: '数学楼503'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/edf484d6-9817-4e80-b94f-e46f3e04e6c1.jpg',
            name: '魏立峰',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '随机微分方程，随机最优控制',
            tele: '',
            email: 'weilifeng@ouc.edu.cn',
            department: '数学系',
            office: '数学楼505'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/72854229-bb29-42b4-9971-b8494e9a351e.jpg',
            name: '赵永昌',
            job: '讲师',
            number: '',
            researchArea: '动力系统与神经网络研究',
            tele: '',
            email: 'zhaoyongchang@ouc.edu.cn',
            department: '数学系',
            office: '数学楼504'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/319ce1b2-1ed4-4a47-b98e-b952eb521036.jpg',
            name: '徐云飞',
            job: '讲师',
            number: '',
            researchArea: '解析数论、自守形式',
            tele: '',
            email: 'xuyunfei@ouc.edu.cn',
            department: '数学系',
            office: '数学楼615'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/dbf8f2eb-542a-413d-966a-7aed7cc5e15b.jpg',
            name: '王建',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '偏微分方程',
            tele: '66787215',
            email: 'pdejwang@ouc.edu.cn',
            department: '数学系',
            office: '数学楼417'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/2d/49/06b4a27842f38a573633f94b7f45/830cc4cf-5939-41bc-993b-7735c114ae46.jpg',
            name: '石岩月',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '函数空间上的算子理论是联系函数论、算子理论和算子代数的纽带与桥梁，其若干性质在控制论、量子力学、电子信息等领域均具有着重要的应用。本人主要从事解析函数空间上算子理论的研究，考虑如何利用符号函数的性质刻画解析函数空间上Toeplitz算子、Hankel算子和复合算子等算子的性质。',
            tele: '',
            email: 'shiyanyue@ouc.edu.cn',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/f97ec512-35a4-4c39-9652-4f1ce2ed9c7d.jpg',
            name: '卢春阁',
            job: '讲师',
            number: '',
            researchArea: '动力系统与神经网络',
            tele: '',
            email: 'lcg@ouc.edu.cn',
            department: '数学系',
            office: '数学楼507'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/6d96344e-2a7e-4a01-bfa6-7e77d34a067c.jpg',
            name: '林敏',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '复杂网络、数据统计分析',
            tele: '',
            email: 'mlin@ouc.edu.cn',
            department: '数学系',
            office: '数学楼507'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/26b27309-c681-4595-bca2-964437485e2f.jpg',
            name: '连福云',
            job: '讲师',
            number: '',
            researchArea: '常微分方程定性理论',
            tele: '',
            email: 'lianfuyun@ouc.edu.cn',
            department: '数学系',
            office: '数学楼507'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/f9c9b282-4bad-4d3c-af51-7e6427b2fe69.jpg',
            name: '李文娟',
            job: '讲师',
            number: '',
            researchArea: '倒向随机微分方程、非线性期望',
            tele: '',
            email: 'liwenjuan@ouc.edu.cn',
            department: '数学系',
            office: '数学楼502'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/befdae60-e2f9-4344-aafd-7e2dd6120bfb.jpg',
            name: '黄桂芳',
            job: '讲师',
            number: '',
            researchArea: '非线性泛函分析',
            tele: '',
            email: 'huangguifang@ouc.edu.cn',
            department: '数学系',
            office: '数学楼507'
        },

        {
            img: '',
            name: '魏常果',
            job: '教授',
            number: '',
            researchArea: '函数空间理论、算子理论、泛函分析及其应用、C*-代数及其扩张等',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/d8452b2a-5d06-47d9-8fca-addabc74691d.jpg',
            name: '陈文轶',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '模糊数学',
            tele: '',
            email: 'chenwy@ouc.edu.cn',
            department: '数学系503',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/05/81/12d28d514aa78b247791ed68cb6c/baf9332c-f3c7-4c46-99f3-863bc51a31e7.jpg',
            name: '李长军',
            job: '教授',
            number: '',
            researchArea: '复分析中离散群问题，三角群问题，复动力系统若干问题。',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/e80dd98d-7fac-4c5d-ac7a-035a54f799f0.jpg',
            name: '赵元章',
            job: '副教授（硕士生导师）',
            number: '',
            researchArea: '非线性泛函分析 临界点理论',
            tele: '',
            email: 'zhaoyz@ouc.edu.cn',
            department: '数学系',
            office: '数学楼509'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/15/15/8e4c8a0947e59773cba25c3ec1dc/1a7420e1-db09-4a78-8162-5b5ac7c755c4.jpg',
            name: '张立振',
            job: '副教授',
            number: '',
            researchArea: '从事参数估计、随机信号分析、R统计软件、latex排版等内容的研究。',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/5e2f9c3c-59a3-4357-b99a-d8a8588afc92.jpg',
            name: '刘宝生',
            job: '副教授',
            number: '',
            researchArea: '概率统计、金融数学 ',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/7d/a4/ae02c804437994e5d0f04f3d6870/86fc646f-6afc-4eb3-9a27-e8dd0315219d.png',
            name: '王莉萍',
            job: '教授',
            number: '',
            researchArea: '随机波浪、海洋灾害预报、金融风险预警。',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/052c115a-7598-4915-aa0a-93d3e3125977.jpg',
            name: '朴大雄',
            job: '教授、博导',
            number: '',
            researchArea: '',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/3e/58/2c076e98431e94c777c2e6374a5b/03457cfe-0cec-452d-bfed-aa5432a0af26.jpg',
            name: '王林山',
            job: '教授、博导',
            number: '',
            researchArea: '动力系统与神经网络研究；海洋数学技术。',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },

        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/f8/6c/2711ac8a49a98ffbb0140eaffab8/eb3e0880-f223-4ad5-9d50-b4942113090b.jpg',
            name: '方进明',
            job: '教授',
            number: '',
            researchArea: '格上拓扑学与非经典推理',
            tele: '',
            email: '',
            department: '数学系',
            office: '数学楼'
        },
        {
            img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/8cf10b9a-0234-4bdf-8111-1f45b5300854.jpg',
            name: '赵熙强', //名称
            job: '教授、博导', //职称
            researchArea: '组合数学、孤立子理论', //研究方向
            tele: '', //电话号码
            email: '', //邮箱
            department: '数学系', //系
            office: '数学楼', //办公室，样例：'教学楼208'或'208'
        },
    ]
    // 计算机系老师信息
let computerTeachers = [{
        img: '',
        name: '曹圣山', //名称
        job: '教授', //职称
        researchArea: '', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/fcac58e7-865f-45b0-8ed1-cb83a619d798.jpg',
        name: '曹永昌', //名称
        job: '讲师', //职称
        researchArea: '从事图论和组合优化方面的研究工作。', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/506eb470-fbe1-4c17-961c-26f30e8632b6.jpg',
        name: '常晋德', //名称
        job: '讲师', //职称
        researchArea: '分布参数系统参数辨识；偏微分方程反问题。', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/55c444a7-8f20-4e67-89c3-5e718915285d.jpg',
        name: '陈春光', //名称
        job: '讲师', //职称
        researchArea: '微分方程数值解；守恒律方程的相变问题', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/42f1b6b8-1812-44ee-b1bb-f909a864021a.jpg',
        name: '陈虎', //名称
        job: '副教授', //职称
        researchArea: '偏微分方程数值解;数值分析', //研究方向
        tele: '', //电话号码
        email: 'chenhu@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/6d3cc4d2-c066-4681-8fe6-cd72e98ebb55.jpg',
        name: '丁双双', //名称
        job: '副教授', //职称
        researchArea: '', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/b9/ff/0cf573bd405c952d07d52c5ad84d/a0a27bf9-83c0-4ee1-ae30-96573564c016.jpg',
        name: '方奇志', //名称
        job: '教授、博导', //职称
        researchArea: '组合最优化。', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/abf4cefc-71eb-4c85-95f9-2994fcb46f9e.jpg',
        name: '冯彦', //名称
        job: '讲师', //职称
        researchArea: '', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/366f45c7-6c55-4ed4-a8ed-196d64b5c2ae.jpg',
        name: '付红斐', //名称
        job: '教授，博士生导师', //职称
        researchArea: '偏微分方程数值分析和科学计算', //研究方向
        tele: '', //电话号码
        email: 'fhf@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '数学楼613室', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/774db545-94ba-4782-92a5-5d3918a4a925.jpg',
        name: '付凯', //名称
        job: '副教授', //职称
        researchArea: '偏微分方程数值解,大气环境计算', //研究方向
        tele: '', //电话号码
        email: 'kfu@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //
        office: '数学科学学院', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/d54246c3-edb1-4930-97fb-9ac661fb1fba.jpg',
        name: '高存臣', //名称
        job: '教授、博导', //职称
        researchArea: '1. Theory and Applications of Functional Differential  Equation;2. Theory and Applications of Large-Scale Dynamic System;3.  Theory and Applications of Variable Structure Control;4. Intelligence  Control Technique.', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/95620b14-4878-40cb-acd6-9d29b460263f.jpg',
        name: '高振', //名称
        job: '教授、博导', //职称
        researchArea: '1. 随机计算和高维不确定性量化2. 双曲守恒律方程组及相关问题的数值方法研究', //研究方向
        tele: '', //电话号码
        email: 'zhengao@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '数学科学学院', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/64b35271-65e3-4d27-bd08-a3deb5b90160.jpg',
        name: '郭晓霞', //名称
        job: '教授', //职称
        researchArea: '线性与非线性数值代数，图像处理等；', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/5daf2cae-2c90-4b75-8c68-361f11f668cf.jpg',
        name: '韩月乔', //名称
        job: '', //职称
        researchArea: '广义离散系统的滑模控制与应用', //研究方向
        tele: '', //电话号码
        email: 'hyq@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/86e7bd05-42ad-4b50-9632-4c10ec0e818b.jpg',
        name: '解朋朋', //名称
        job: '讲  师', //职称
        researchArea: '数值线性代数、随机算法', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/1b49b0e2-a7c6-4252-b459-84db33565dd6.jpg',
        name: '郎丰贡', //名称
        job: '讲师', //职称
        researchArea: '数值逼近。', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/d088a21e-254c-4783-bd07-d9bb765baf6b.jpg',
        name: '李晓敏', //名称
        job: '讲师', //职称
        researchArea: '', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/c71e4149-e50e-4fea-b804-e2025b10c0ca.jpg',
        name: '刘彬', //名称
        job: '教授', //职称
        researchArea: '组合优化、图论等，包括近似算法的设计与分析、次模优化理论、图的结构与算法、社交网络中的组合优化问题等。', //研究方向
        tele: '', //电话号码
        email: 'binliu@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/11f36132-5ece-4b0b-86ce-aefd4f3bcd2b.jpg',
        name: '刘文静', //名称
        job: '讲师', //职称
        researchArea: '组合优化，博弈机制设计，马氏决策过程及其应用。', //研究方向
        tele: '', //电话号码
        email: 'liuwj@ouc.edu.cn，liuwj_123@126.com', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/2d03e22e-1f49-4bcc-9868-0e98b51d77d2.jpg',
        name: '刘珑龙', //名称
        job: '副教授', //职称
        researchArea: '研究方向为智能计算，主要方向为人工神经网络、控制论', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/2983cc77-4304-4074-8a84-4f05c04f97fe.jpg',
        name: '刘晓东', //名称
        job: '讲师', //职称
        researchArea: '模糊数学 无线传感器网络', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/5876464f-1bcf-490e-bcdb-2b6df0bb45fd.jpg',
        name: '刘新国', //名称
        job: '教授、博导', //职称
        researchArea: '数值代数。', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/921935aa-ff73-41f0-a164-0416ec9257bb.jpg',
        name: '吕可波', //名称
        job: '讲师', //职称
        researchArea: '1. 组合优化算法及其应用2. 船运及海事物流研究：船运航线及网络设计中的建模及算法研究.', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/babde0da-e177-4921-8384-4a2d10061acf.jpg',
        name: '农庆琴', //名称
        job: '副教授、硕士生导师', //职称
        researchArea: '优化问题的计算复杂性分析与（近似）算法设计 非合作博弈问题的协调机制设计与分析 合作博弈问题的计算复杂性分析和算法设计', //研究方向
        tele: '', //电话号码
        email: 'qqnong@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/c8e2e0f7-8177-481a-b81b-8855bb538a0d.jpg',
        name: '曲镜如', //名称
        job: '讲师', //职称
        researchArea: '大系统稳定性分析 、海洋环流动力学', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/e4/fa/8407965d4fc59efd855e97f4d925/fa665b69-3692-41f0-bcdc-86e2be5d0567.jpg',
        name: '曲晓英', //名称
        job: '讲师', //职称
        researchArea: '组合数学', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/63eeea4c-da12-44d8-85b2-e5e85d0598ea.jpg',
        name: '任启峰', //名称
        job: '讲师', //职称
        researchArea: '滑模变结构控制理论、海浪数据同化', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/f9de28f2-4fb7-4e83-b06e-69964e0c9955.jpg',
        name: '施心慧', //名称
        job: '副教授', //职称
        researchArea: '数值模拟、海洋科学中的数学模型', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/eb04b316-220e-4670-aaa9-81294f80db7d.jpg',
        name: '孙建青', //名称
        job: '副教授', //职称
        researchArea: '可积离散化收敛加速算法非线性波动方程周期波的数值计算', //研究方向
        tele: '', //电话号码
        email: 'sunjianqing@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: '',
        name: '孙敏慧', //名称
        job: '副教授', //职称
        researchArea: '鲁棒控制 时滞系统 Markov切换系统 正系统 模型降阶', //研究方向
        tele: '', //电话号码
        email: 'sunny_mh@163.com', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/88426922-37b2-4eb7-bb41-2ea933e55dc9.jpg',
        name: '孙祥', //名称
        job: '讲师', //职称
        researchArea: '数据驱动的约化模型构造，不确定性量化分析，计算流体力学', //研究方向
        tele: '', //电话号码
        email: 'sunxiang@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/90ac280e-8137-4056-9e15-3d65c39415ca.jpg',
        name: '田浩', //名称
        job: '讲师', //职称
        researchArea: '非局部弹性力学模型（近场动力学）建模以及算法研究、非局部对流扩散问题建模以及算法研究、非局部各向异性扩散模型的建模与算法研究、机器学习与非局部建模', //研究方向
        tele: '', //电话号码
        email: 'haot@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/71020857-3d6e-48f4-96c1-847f7831ebb4.jpg',
        name: '王卫国', //名称
        job: '教授、硕士生导师', //职称
        researchArea: '数值代数，目前的研究兴趣：科学计算、矩阵方程的数值解法、流形上的最优化问题、非线性矩阵特征值问题、数据处理与分析等。', //研究方向
        tele: '86-532-66787266', //电话号码
        email: 'wgwang@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/f793e017-7734-41a7-895f-bb1790d713f7.jpg',
        name: '王雯', //名称
        job: '讲师', //职称
        researchArea: '非线性动力学', //研究方向
        tele: '', //电话号码
        email: 'wangwen@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '数学楼508', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/b7ac9a6e-9b38-469a-b076-253f44ad4c70.jpg',
        name: '王学芳', //名称
        job: '讲师', //职称
        researchArea: '智能信息处理、多值逻辑、逻辑代数及不确定性推理', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: '',
        name: '王学锋', //名称
        job: '', //职称
        researchArea: '', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/ad35ec89-c276-4091-a3dc-08a38238861a.jpg',
        name: '肖汉', //名称
        job: '讲师（硕士生导师）', //职称
        researchArea: '组合优化，算法博弈', //研究方向
        tele: '', //电话号码
        email: 'hxiao@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/34f8ea1a-4f9d-468a-add1-050ebaeff7dd.jpg',
        name: '谢树森', //名称
        job: '教授', //职称
        researchArea: '偏微分方程数值方法及应用研究。', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/bafef52e-5a6f-4210-af8b-2113b3092062.jpg',
        name: '徐晓萍', //名称
        job: '讲师', //职称
        researchArea: 'Hilbert空间上的控制理论，数值分析等', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/9985422e-b3bd-4425-a313-67d7bdf6d40a.jpg',
        name: '徐鑫', //名称
        job: '讲师', //职称
        researchArea: '●  偏微分方程的适定性●  流体力学方程的奇异极限●  大气海洋模型的数学理论', //研究方向
        tele: '', //电话号码
        email: 'xx@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: '',
        name: '袁春欣', //名称
        job: '讲师', //职称
        researchArea: '线性代数 微积分 线性代数基础 高等微积分', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/43201409-51b5-4b8e-9ad6-489a42758937.jpg',
        name: '袁春鑫', //名称
        job: '讲师', //职称
        researchArea: '物理海洋与数学交叉学科：物理海洋，非线性内波动力学，非线性波动，数值模拟。', //研究方向
        tele: '', //电话号码
        email: 'yuanchunxin@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '数学科学学院，504房间', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/fad484da-b9c9-456d-b01e-00a0854c68a5.png',
        name: '曾维新', //名称
        job: '教授、博士生导师', //职称
        researchArea: '应用数学，偏微分方程•数值分析，数值线性代数，数值偏微分方程•高阶算法：谱方法，WENO 方法，紧格式，间断Galerkin 方法, 有限差分/体积/元方法, 径向基函数，激波检测算法，杂交格式，人工神经网络•计算流体动力学•激波，爆炸，冲击粒子流，浅水波方程，瑞利-泰勒不稳定性(RTI)，瑞奇迈尔-莫西科夫不稳定性(RMI)，多相/多物质冲激流，高速可压缩湍流•高性能并行科学计算和高阶格式软件包：PseudoPack/HOPEpack', //研究方向
        tele: '', //电话号码
        email: 'donwaisun@outlook.com', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/a5a61305-6a45-4d91-895c-31778e76ed13.jpg',
        name: '曾雪迎', //名称
        job: '副教授', //职称
        researchArea: '最优化理论与算法；应用与计算调和分析（小波分析、稀疏表示及正则化、压缩感知等）；数据分析与处理的数学模型及数值算法图像和信号处理；', //研究方向
        tele: '', //电话号码
        email: 'zxying@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/2e5b7129-79a2-40ce-a0d6-bc2bee374ff8.jpg',
        name: '张京良', //名称
        job: '副教授', //职称
        researchArea: '密码理论及应用', //研究方向
        tele: '', //电话号码
        email: 'zhangjingliang@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/63007c2b-3ca5-4591-a748-36aca77ef9d7.jpg',
        name: '张临杰', //名称
        job: '副教授', //职称
        researchArea: '研究领域包括但不限于以下内容：并行计算、基于SAR遥感图像的海上舰船目标检测与识别、海上舰船目标的SAR图像模拟、大规模线性方程组数值解。', //研究方向
        tele: '66787061', //电话号码
        email: 'zhanglinjie@ouc.edu.cn', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/8cf10b9a-0234-4bdf-8111-1f45b5300854.jpg',
        name: '赵熙强', //名称
        job: '教授、博导', //职称
        researchArea: '组合数学、孤立子理论', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
    {
        img: 'http://math.ouc.edu.cn/_upload/article/images/a1/e4/4ebf7d814ac3b52ca8378ac9b741/d15ba435-e557-461b-b140-1430b932ef12.jpg',
        name: '赵勇', //名称
        job: '副教授、硕士生导师', //职称
        researchArea: '图形图像处理方面的理论和算法', //研究方向
        tele: '', //电话号码
        email: '', //邮箱
        department: '信息与计算科学系', //系
        office: '', //办公室，样例：'教学楼208'或'208'
    },
]

// 学院行政老师信息
// 领导信息
var leaders = [{
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/f8fc0397-a323-4b2b-9b1d-21e86350a092.jpg',
        name: '谢树森'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/5fb7d30b-c962-4920-8ea7-84af3c8e836b.jpg',
        name: '王建'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/ed58783d-c0b4-4053-9192-167ba8ef5d83.jpg',
        name: '王卫国'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/bbd744da-f1ba-4ad2-ada6-06051852e2af.jpg',
        name: '高振'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/9d8ac2cf-b98d-408a-ad71-0d1c06e6a3c1.jpg',
        name: '于泳'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/951a923e-c916-40cd-ad92-a8e21c21c071.jpg',
        name: '张临杰'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/f863f184-a105-4b2c-ae01-fb125defc659.jpg',
        name: '赵洪庆'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/62107a5e-d886-48f3-bb8d-05bd3c990dbf.jpg',
        name: '王玺'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/0494f2b4-136c-4822-a34e-c1ecd3a42e66.jpg',
        name: '高原'
    }, {
        img: '',
        name: '丁媛'
    }, {
        img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/0e6a307b-89b2-409d-869f-d8a306fb1630.jpg',
        name: '王平'
    }, ]
    // 党委团委老师信息
var partyLeaders = [{
    img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/5b6e548b-29aa-454a-bc3d-166c219cb7a4.jpg',
    name: '张丽'
}, {
    img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/81d9dec8-f1a9-4ec6-8d8d-6bcefc276ee3.jpg',
    name: '于泳'
}, {
    img: '',
    name: '崔琪'
}, {
    img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/24f2e8eb-64a2-48b9-b260-c22a9e637667.jpg',
    name: '律海伦'
}, {
    img: 'http://math.ouc.edu.cn/_upload/article/images/aa/2b/4748e58f499d81b18fc7bb131800/5a321d2b-1669-45e3-9313-2f467a6b57e5.jpg',
    name: '刘盈弟'
}, {
    img: '',
    name: '李健'
}, ]

function addClass(element, cName) { //添加一个class
    if (!hasClass(element, cName)) {
        element.className += ' ' + cName;
    }
}

function removeClass(element, cName) { //移除一个class
    if (hasClass(element, cName)) {
        element.className = element.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
    }
}

// 在指定类名的元素后加入元素。
function insertAfter(newElement, targetElement) { // newElement是要追加的元素 targetElement 是指定元素的位置
    if (targetElement) {
        var parent = targetElement.parentNode; // 找到指定元素的父节点
        if (parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法 
            parent.appendChild(newElement, targetElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        };
    }
}

function createDocument(txt) {
    const template = `<div class='child'>${txt}</div>`;
    let doc = new DOMParser().parseFromString(template, 'text/html');
    let div = doc.querySelector('.child');
    return div;
}

// 动态引入css的link标签

function addCssByLink(url) {
    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);

    var heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        doc.documentElement.appendChild(link);
}

let vBar = document.body.querySelector(".verticalBar");
let vLi = document.body.querySelector(".navLi");

let mathUrl = "https://math.ouc.edu.cn/_t2405/sxx/list.psp"
let computerUrl = "https://math.ouc.edu.cn/_t2405/xxyjskxx/list.psp"
let graduatesUrl = "https://math.ouc.edu.cn/_t2405/xydt/list.psp"

function show() {
    let url = window.location.href;
    // 数学、 信息教师列表
    if (url.indexOf("/sxx/") >= 0 || url.indexOf("/xxyjskxx/") >= 0) {
        console.log("教师列表");
        frag1.style.display = "none";
        frag2.style.display = "none";
        frag3.style.display = "block";
        // 对frag3进行改造

        {
            // 第一步删除li下面所有的子节点
            let father = document.body.querySelector(".columnContent3 ").querySelectorAll(".list_item");
            let tl = document.body.querySelector('#teacherList');
            let hrefArray = new Array(8);
            // 表示当前页七个老师的姓名和系
            let nameArray = new Array(8);
            let depaArray = new Array(8);
            // 表示当前页的七个老师
            let curTeaArray = new Array(8);
            // 根据原来的元素，获取每一条应该显示哪一个老师以及他对应的系。
            let nameFather = document.body.querySelectorAll("span.Article_Title");
            let items = document.body.querySelector(".columnContent3").querySelectorAll(".list_item");

            for (let m = 0; m <= items.length - 1; m++) {
                nameArray[m] = nameFather[m].firstElementChild.innerHTML;
                if (url.indexOf("sxx") >= 0) {
                    let n = 0;
                    while (!(nameArray[m].indexOf(mathTeachers[n].name) >= 0) && n <= mathTeachers.length - 1) {
                        n++;
                    }
                    curTeaArray[m] = mathTeachers[n];
                    // console.log(nameArray[m], mathTeachers[n].name, curTeaArray[m]);

                } else {
                    let n = 0;
                    console.log(nameArray[m]);
                    while (!(nameArray[m].indexOf(computerTeachers[n].name) >= 0) && n <= computerTeachers.length - 1) {
                        n++;
                    }
                    curTeaArray[m] = computerTeachers[n];
                    // console.log(nameArray[m], computerTeachers[n].name, curTeaArray[m]);
                }
            }
            // console.log("nameArray:", nameArray);
            // console.log("curTeaArr1:", curTeaArray);

            for (let i = 0; i <= father.length - 1; i++) {
                count = 0;

                // 获取跳转url
                let targetUrl = father[i].firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.href
                hrefArray[i] = targetUrl;
                // 删除结点
                while (father[i].firstChild) {
                    let oldNode = father[i].removeChild(father[i].firstChild);
                    oldNode = null;
                }

            }

            // 第二步添加目标html代码
            for (let i = 0; i <= father.length - 1; i++) {
                father[i].appendChild(createDocument(tl.innerHTML))
            }

            // 给a标签 添加跳转链接
            let aTags = document.body.querySelectorAll(".aTag");
            let aTags2 = document.body.querySelectorAll(".aTag2");


            for (let i = 0; i <= father.length - 1; i++) {
                aTags[i].href = hrefArray[i];
                aTags2[i].href = hrefArray[i];
            }

            // 点击a标签， 则跳转到老师信息页， 则显示老师信息。 把逻辑变量设为true
            for (let i = 0; i <= father.length - 1; i++) {
                aTags[i].onclick = function() {
                    window.localStorage.setItem("showTeacher", "true")
                    window.localStorage.setItem("teacherInfo", JSON.stringify(curTeaArray[i]))
                }
                aTags2[i].onclick = function() {
                    window.localStorage.setItem("showTeacher", "true")
                    window.localStorage.setItem("teacherInfo", JSON.stringify(curTeaArray[i]))
                }
            }


            // 拿到应该输入相应数据的元素
            let imgFather = document.body.querySelectorAll(".photo.bg-blue.d-inblock");

            // 每一个盒子照片的 src imgFather[0].children[0].src

            let tName = document.body.querySelectorAll("span.tName")
                // console.log(tName);
            let tJobs = document.body.querySelectorAll("span.tJobs")
                // console.log(tJobs);
            let tResearch = document.body.querySelectorAll("span.tResearch")
                // console.log(tResearch);

            let tEmail = document.body.querySelectorAll("span.tEmail")
                // console.log(tEmail);

            // 获取当前页的页码。
            let cur_page = document.body.querySelector("em.curr_page").innerHTML;
            // console.log(cur_page);

            // 开始输入数据
            let mathNum = mathTeachers.length; //数学教师的总人数
            let computerNum = computerTeachers.length;
            if (url.indexOf("sxx") >= 0) {
                if (cur_page * 8 <= mathNum) {
                    for (i = 0; i <= 7; i++) {
                        imgFather[i].children[0].src = curTeaArray[i].img;
                        tName[i].innerHTML = curTeaArray[i].name;
                        tJobs[i].innerHTML = curTeaArray[i].job;
                        tResearch[i].innerHTML = curTeaArray[i].researchArea;
                        tEmail[i].innerHTML = curTeaArray[i].email;

                        // console.log(i, tName[i], curTeaArray[i]);
                    }
                } else {
                    for (i = 0; i <= mathNum - (cur_page - 1) * 8 - 1; i++) {
                        imgFather[i].children[0].src = curTeaArray[i].img;
                        tName[i].innerHTML = curTeaArray[i].name;
                        tJobs[i].innerHTML = curTeaArray[i].job;
                        tResearch[i].innerHTML = curTeaArray[i].researchArea;
                        tEmail[i].innerHTML = curTeaArray[i].email;

                        // console.log(i, tName[i], curTeaArray[i]);

                    }
                }
            } else {
                if (cur_page * 8 <= computerNum) {
                    for (i = 0; i <= 7; i++) {
                        imgFather[i].children[0].src = curTeaArray[i].img;
                        tName[i].innerHTML = curTeaArray[i].name;
                        tJobs[i].innerHTML = curTeaArray[i].job;
                        tResearch[i].innerHTML = curTeaArray[i].researchArea;
                        tEmail[i].innerHTML = curTeaArray[i].email;

                    }
                } else {
                    for (i = 0; i <= computerNum - (cur_page - 1) * 8 - 1; i++) {
                        imgFather[i].children[0].src = curTeaArray[i].img;
                        tName[i].innerHTML = curTeaArray[i].name;
                        tJobs[i].innerHTML = curTeaArray[i].job;
                        tResearch[i].innerHTML = curTeaArray[i].researchArea;
                        tEmail[i].innerHTML = curTeaArray[i].email;

                    }
                }
            }

        }

        var Listteacher = document.querySelectorAll('.tResearch');
        // console.log('fuck', Listteacher);
        // console.log(Listteacher);
        // for (var i = 0; i < Listteacher.length; i++) {
        //     if (Listteacher[i].innerHTML.length > 16) {
        //         Listteacher[i].style.height = 2 + 'vw';
        //     }
        // }
        // console.log(Listteacher[0].innerHTML.length);

    } else if (url.indexOf("/rczp") >= 0) {
        console.log("人才招聘");
        frag1.style.display = "block";
        frag2.style.display = "none";
        frag3.style.display = "none";
    }
    // 校长寄语
    else if (url.indexOf("/xzjy") >= 0) {
        console.log("校长寄语");
        frag1.style.display = "block";
        frag2.style.display = "none";
        frag3.style.display = "none";
        var father = document.body.querySelector(".columnContent1");
        // console.log(father);
        var temp = document.body.querySelector("#principle");
        // console.log(temp);
        father.appendChild(createDocument(temp.innerHTML));
    }
    // 学院行政
    else if (url.indexOf("/xyxz") >= 0) {
        console.log("学院行政");
        frag1.style.display = "block";
        frag2.style.display = "none";
        frag3.style.display = "none";
        var father = document.body.querySelector(".columnContent1");
        var temp = document.body.querySelector("#xyxz");
        father.appendChild(createDocument(temp.innerHTML));
        var imgs = document.body.querySelectorAll("#leadersImg");
        for (let i = 0; i <= imgs.length - 1; i++) {
            imgs[i].src = leaders[i].img;
        }
    }
    // 党委团委
    else if (url.indexOf("/dwtw") >= 0) {
        console.log("党委团委");
        frag1.style.display = "block";
        frag2.style.display = "none";
        frag3.style.display = "none";
        var father = document.body.querySelector(".columnContent1");
        var temp = document.body.querySelector("#dwtw");
        father.appendChild(createDocument(temp.innerHTML));
        var imgs = document.body.querySelectorAll("#leadersImg");
        for (let i = 0; i <= imgs.length - 1; i++) {
            imgs[i].src = partyLeaders[i].img;
        }
    }
    // 普通页面
    else {
        console.log("普通，更改新闻样式");
        frag1.style.display = "block";
        frag2.style.display = "none";
        frag3.style.display = "none";
        frag1.classList.add("change");

    }
    // 初始化蓝条的长度
    let h = vLi.getBoundingClientRect().height;
    vBar.style.height = h + 'px';
}

// 填写栏目名称
let title = document.body.querySelector(".titleWords");
console.log(title);
title.innerHTML = window.localStorage.getItem("title");
// window.localStorage.removeItem("title");
// 根据当前url, 判断二级导航应当加载哪个窗口(一共有三个窗口)
// 获取应有点击事件的元素(数组)
let frag1 = document.body.querySelector(".columnContent1");
let frag2 = document.body.querySelector(".columnContent2");
let frag3 = document.body.querySelector(".columnContent3");
let list = document.body.querySelectorAll(".wp_column");

window.onbeforeunload = show();

let el = document.body.querySelectorAll('.pr_fields');

for (let i = 0; i <= el.length - 1; i++) {
    let bar = document.createElement("div");
    bar.className = "bar"
    insertAfter(bar, el[i]);
}

let split = document.body.querySelector(".possplit");
// console.log("split", split);
let content = split.nextElementSibling;
// console.log("content", content);
if (content.innerHTML == "学生活动") {
    title.innerHTML = "学生活动";
} else if (content.innerHTML == "新闻动态") {
    title.innerHTML = "新闻动态";
} else if (content.innerHTML == "通知公告") {
    title.innerHTML = "通知公告";
} else if (content.innerHTML == "学术交流") {
    title.innerHTML = "学术公告";
} else if (content.innerHTML == "学子风采") {
    title.innerHTML = "风采展示";
} else if (content.innerHTML == "研究成果") {
    title.innerHTML = "研究成果";
} else if (content.innerHTML == "常用下载") {
    title.innerHTML = "常用下载";
} else if (content.innerHTML == "学院概况") {
    title.innerHTML = "学院概况";
} else if (content.innerHTML == "师资队伍") {
    title.innerHTML = "师资队伍";
} else if (content.innerHTML == "教育教学") {
    title.innerHTML = "教育教学";
} else if (content.innerHTML == "科学研究") {
    title.innerHTML = "科学研究";
} else if (content.innerHTML == "党建工作") {
    title.innerHTML = "党建工作";
} else if (content.innerHTML == "学生工作") {
    title.innerHTML = "学生工作";
} else if (content.innerHTML == "合作交流") {
    title.innerHTML = "合作交流";
} else if (content.innerHTML == "校友中心") {
    title.innerHTML = "校友中心";
} else if (content.innerHTML == "就业信息") {
    title.innerHTML = "就业信息";
}

var url = window.location.href;
// 给数学系老师第四页强制添加css
if (url.indexOf("sxx/list4")) {
    console.log("数学系老师第四页");
    addCssByLink("/_upload/tpl/09/65/2405/template2405/./css/listColumn.css");
}

// var imgs = document.body.querySelectorAll("#leadersImg");
// console.log(imgs[9]);
// console.log(leaders[9]);
// for (let i = 0; i <= imgs.length - 1; i++) {
//     if (leaders[i] != undefined) {
//         imgs[i].src = leaders[i].img;
//         console.log(leaders[i].img);
//     }
// }

var temp = document.body.querySelector("#principle");
console.log(temp);

var leaders = document.body.querySelectorAll("#leadersImg");
console.log("leaders:", leaders);