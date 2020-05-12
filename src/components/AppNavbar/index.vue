<template>
  <div class="navbar">
    <div class="w">
      <div class="location" @mouseover="overLocation" @mouseout="outLocation">
        <div>
          <i class="fa fa-send-o" aria-hidden="true" style="color:red"></i>
          <span>重庆</span>
        </div>
        <div class="locationSon" v-show="location===1">
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">上海</a>
          </div>
          <div>
            <a href="#">天津</a>
          </div>
          <div>
            <a href="#">重庆</a>
          </div>
          <div>
            <a href="#">河北</a>
          </div>
          <div>
            <a href="#">山西</a>
          </div>
          <div>
            <a href="#">河南</a>
          </div>
          <div>
            <a href="#">辽宁</a>
          </div>
          <div>
            <a href="#">吉林</a>
          </div>
          <div>
            <a href="#">黑龙江</a>
          </div>
          <div>
            <a href="#">内蒙古</a>
          </div>
          <div>
            <a href="#">江苏</a>
          </div>
          <div>
            <a href="#">山东</a>
          </div>
          <div>
            <a href="#">安徽</a>
          </div>
          <div>
            <a href="#">浙江</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">上海</a>
          </div>
          <div>
            <a href="#">天津</a>
          </div>
          <div>
            <a href="#">重庆</a>
          </div>
          <div>
            <a href="#">河北</a>
          </div>
          <div>
            <a href="#">山西</a>
          </div>
          <div>
            <a href="#">河南</a>
          </div>
          <div>
            <a href="#">辽宁</a>
          </div>
          <div>
            <a href="#">吉林</a>
          </div>
          <div>
            <a href="#">黑龙江</a>
          </div>
          <div>
            <a href="#">内蒙古</a>
          </div>
          <div>
            <a href="#">江苏</a>
          </div>
          <div>
            <a href="#">山东</a>
          </div>
          <div>
            <a href="#">安徽</a>
          </div>
          <div>
            <a href="#">浙江</a>
          </div>

          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">上海</a>
          </div>
          <div>
            <a href="#">天津</a>
          </div>
          <div>
            <a href="#">重庆</a>
          </div>
          <div>
            <a href="#">河北</a>
          </div>
        </div>
      </div>
      <ul class="fr nav">
        <li>
          <a class="hoverRed" href="#">你好，请登录</a>
        </li>
        <li>
          <a href="#" style="color:red">免费注册</a>
        </li>
        <li class="line"></li>
        <li>
          <a class="hoverRed" href="#">我的订单</a>
        </li>
        <li class="line"></li>
        <li class="wdjd" @mouseover="hoverWdjd" @mouseout="outWdjd">
          <a class="hoverRed" href="#">我的京东</a>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
          <div class="wdjdSon" v-show="wdjd===1">
            <div class="top">
              <div>
                <a href="#">待处理订单</a>
              </div>
              <div>
                <a href="#">消息</a>
              </div>
              <div>
                <a href="#">返修退换货</a>
              </div>
              <div>
                <a href="#">我的问答</a>
              </div>
              <div>
                <a href="#">降价商品</a>
              </div>
              <div>
                <a href="#">我的关注</a>
              </div>
            </div>
            <div class="bottom">
              <div>
                <a href="#">返修退换货</a>
              </div>
              <div>
                <a href="#">我的问答</a>
              </div>
              <div>
                <a href="#">降价商品</a>
              </div>
              <div>
                <a href="#">我的关注</a>
              </div>
            </div>
          </div>
        </li>

        <li class="line"></li>
        <li>
          <a class="hoverRed" href="#">京东会员</a>
        </li>
        <li class="line"></li>
        <li class="qycg" @mouseover="hoverQycg" @mouseout="outQycg">
          <a href="#" style="color:red">企业采购</a>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
          <div class="qycgSon" v-show="qycg ===1">
            <div>
              <a href="#">企业购</a>
            </div>
            <div>
              <a href="#">商用场撒法</a>
            </div>
            <div>
              <a href="#">工业品</a>
            </div>
            <div>
              <a href="#">礼品卡</a>
            </div>
            <div>
              <a href="#">风可多</a>
            </div>
          </div>
        </li>
        <li class="line"></li>

        <li class="khfw" @mouseover="hoverKhfw" @mouseout="outKhfw">
          <a href="#">客户服务</a>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
          <div class="khfwSon" v-show="khfw === 1">
            <div class="item-client">客户</div>
            <div class="item">
              <a href="#">帮助中心</a>
            </div>
            <div class="item">
              <a href="#">售后服务</a>
            </div>
            <div class="item">
              <a href="#">在线客服</a>
            </div>
            <div class="item">
              <a href="#">意见建议</a>
            </div>
            <div class="item">
              <a href="#">电话客服</a>
            </div>
            <div class="item">
              <a href="#">客服邮箱</a>
            </div>
            <div class="item">
              <a href="#">金融资讯</a>
            </div>
            <div class="item">
              <a href="#">全球售客服</a>
            </div>
            <div class="line2"></div>
            <div class="item-client">商户</div>
            <div class="item">
              <a href="#">合作招商</a>
            </div>
            <div class="item">
              <a href="#">成长中心</a>
            </div>
            <div class="item">
              <a href="#">商家后台</a>
            </div>
            <div class="item">
              <a href="#">京麦工作室</a>
            </div>
            <div class="item">
              <a href="#">商家帮助</a>
            </div>
            <div class="item">
              <a href="#">规则平台</a>
            </div>
          </div>
        </li>
        <li class="line"></li>
        <li class="wzdh" @mouseover="hoverWzdh" @mouseout="outWzdh">
          <a href="#">网站导航</a>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
          <div class="wzdhSon" v-show="wzdh === 1">
            <div class="item1">
              <div class="title">特色主题</div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">京东金融</a>
              </div>
              <div class="content">
                <a href="#">全球售</a>
              </div>
              <div class="content">
                <a href="#">国际站</a>
              </div>
              <div class="content">
                <a href="#">京东会员</a>
              </div>
              <div class="content">
                <a href="#">京东预售</a>
              </div>
              <div class="content">
                <a href="#">台湾售</a>
              </div>
              <div class="content">
                <a href="#">俄语站</a>
              </div>
              <div class="content">
                <a href="#">装机大师</a>
              </div>
              <div class="content">
                <a href="#">0元评测</a>
              </div>
              <div class="content">
                <a href="#">港澳售</a>
              </div>
              <div class="content">
                <a href="#">优惠券</a>
              </div>
              <div class="content">
                <a href="#">秒杀</a>
              </div>
              <div class="content">
                <a href="#">闪购</a>
              </div>
              <div class="content">
                <a href="#">印尼站</a>
              </div>
              <div class="content">
                <a href="#">京东金融科技</a>
              </div>
              <div class="content">
                <a href="#">陪伴计划</a>
              </div>
              <div class="content">
                <a href="#">出海招商</a>
              </div>
              <div class="content">
                <a href="#">拍拍二手</a>
              </div>
              <div class="content">
                <a href="#">买什么</a>
              </div>
            </div>
            <div class="item2">
              <div class="title">行业频道</div>
              <div class="content">
                <a href="#">手机</a>
              </div>
              <div class="content">
                <a href="#">智能数码</a>
              </div>
              <div class="content">
                <a href="#">玩3C</a>
              </div>
              <div class="content">
                <a href="#">电脑办公</a>
              </div>
              <div class="content">
                <a href="#">家用电器</a>
              </div>
              <div class="content">
                <a href="#">京鱼座智能</a>
              </div>
              <div class="content">
                <a href="#">手机</a>
              </div>
              <div class="content">
                <a href="#">智能数码</a>
              </div>
              <div class="content">
                <a href="#">玩3C</a>
              </div>
              <div class="content">
                <a href="#">电脑办公</a>
              </div>
              <div class="content">
                <a href="#">家用电器</a>
              </div>
              <div class="content">
                <a href="#">京鱼座智能</a>
              </div>
              <div class="content">
                <a href="#">整车</a>
              </div>
              <div class="content">
                <a href="#">图书</a>
              </div>
              <div class="content">
                <a href="#">劳动保护</a>
              </div>
            </div>
            <div class="item3">
              <div class="title">生活服务</div>
              <div class="content">
                <a href="#">京东众筹</a>
              </div>
              <div class="content">
                <a href="#">白条</a>
              </div>
              <div class="content">
                <a href="#">京东金融APP</a>
              </div>
              <div class="content">
                <a href="#">京东小金库</a>
              </div>
              <div class="content">
                <a href="#">理财</a>
              </div>
              <div class="content">
                <a href="#">花费</a>
              </div>
              <div class="content">
                <a href="#">水电煤</a>
              </div>
              <div class="content">
                <a href="#">彩票</a>
              </div>
              <div class="content">
                <a href="#">旅行</a>
              </div>
              <div class="content">
                <a href="#">机票酒店</a>
              </div>
              <div class="content">
                <a href="#">电影票</a>
              </div>
              <div class="content">
                <a href="#">京东到家</a>
              </div>
              <div class="content">
                <a href="#">游戏</a>
              </div>
              <div class="content">
                <a href="#">拍拍回收</a>
              </div>
            </div>
            <div class="item4">
              <div class="title">更多精选</div>
              <div class="content">
                <a href="#">合作招商</a>
              </div>
              <div class="content">
                <a href="#">京东通信</a>
              </div>
              <div class="content">
                <a href="#">京东E卡</a>
              </div>
              <div class="content">
                <a href="#">企业采购</a>
              </div>
              <div class="content">
                <a href="#">服务市场</a>
              </div>
              <div class="content">
                <a href="#">办公生活馆</a>
              </div>
              <div class="content">
                <a href="#">乡村招募</a>
              </div>
              <div class="content">
                <a href="#">校园加盟</a>
              </div>
              <div class="content">
                <a href="#">京东社区</a>
              </div>
              <div class="content">
                <a href="#">游戏社区</a>
              </div>
              <div class="content">
                <a href="#">知识产权社区</a>
              </div>
            </div>
          </div>
        </li>
        <li class="line"></li>
        <li class="sjjd" @mouseover="hoverSjjd" @mouseout="outSjjd">
          <a href="#">手机京东</a>
          <div class="sjjdSon" v-show="sjjd === 1">
            <img src="../../assets/sjjd.jpg" alt="#" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: 0,
      wdjd: 0,
      qycg: 0,
      khfw: 0,
      wzdh: 0,
      sjjd: 0
    };
  },
  methods: {
    overLocation() {
      this.location = 1;
    },
    outLocation() {
      this.location = 0;
    },
    hoverWdjd() {
      this.wdjd = 1;
    },
    outWdjd() {
      this.wdjd = 0;
    },
    hoverQycg() {
      this.qycg = 1;
    },
    outQycg() {
      this.qycg = 0;
    },
    hoverKhfw() {
      this.khfw = 1;
    },
    outKhfw() {
      this.khfw = 0;
    },
    hoverWzdh() {
      this.wzdh = 1;
    },
    outWzdh() {
      this.wzdh = 0;
    },
    hoverSjjd() {
      this.sjjd = 1;
    },
    outSjjd() {
      this.sjjd = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  font-size: 0px;
}
.navbar {
  width: 100%;
  height: 30px;
  background-color: #e3e4e5;

  .hoverRed:hover {
    color: red;
  }

  .location {
    display: inline-block;
    line-height: 30px;
    width: 70px;
    position: relative;
    .locationSon {
      z-index: 9999999999999;
      border: 1px solid #ccc;
      border-top: none;
      position: absolute;
      top: 30px;
      left: -1px;
      background-color: white;
      width: 300px;
      height: 220px;
      padding: 10px;
      box-sizing: border-box;
      line-height: 0px;
      div {
        width: 55px;
        height: 28px;
        // background-color: pink;
        box-sizing: border-box;
        // border: 1px solid grey;
        display: inline-block;
        padding: 0px !important;
        margin: 0px !important;
        a {
          display: block;
          width: 40px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          // font-weight: bold;
          font-size: 12px;
        }
        a:hover {
          color: #e33333 !important;
          background-color: #f4f4f4;
        }
      }
    }
    span {
      color: #999;
      font-size: 12px;
      padding-left: 5px;
    }
  }
  .location:hover {
    background-color: white;
    border: 1px solid #ccc;
    border-top: none;
    border-bottom: none;
  }
  .nav {
    .sjjd:hover {
      background-color: white;
      border-left: 1px solid #ccc;
      padding-left: 9px;
    }
    .sjjd {
      .sjjdSon {
        z-index: 100000000;
        position: absolute;
        left: -129px;
        top: 30px;
        border: 1px solid #ccc;
        border-top: none;
      }
      position: relative;
      margin-left: 0px;
      padding-left: 10px;
      padding-right: 5px;
    }
    .wzdh:hover {
      background-color: white;
      padding-left: 9px;
      border-left: 1px solid #ccc;
      border-bottom: none;
      height: 31px;
    }
    .wzdh {
      z-index: 1000000000;
      .wzdhSon {
        .item1 {
          .title {
            width: 340px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .content {
            a {
              line-height: 24px;
            }
            a:hover {
              color: red;
            }
            width: 85px;
            height: 24px;
            display: inline-block;
            font-size: 12px;
          }

          border-right: 1px solid #eee;
          display: inline-block;
          height: 149px;
          width: 361px;
          padding-left: 20px;
          box-sizing: border-box;
        }
        .item2 {
          .title {
            width: 255px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .content {
            a {
              line-height: 24px;
            }
            a:hover {
              color: red;
            }
            width: 85px;
            height: 24px;
            display: inline-block;
            font-size: 12px;
          }
          vertical-align: top;
          border-right: 1px solid #eee;
          display: inline-block;
          height: 149px;
          width: 276px;
          padding-left: 20px;
          box-sizing: border-box;
        }
        .item3 {
          .title {
            width: 255px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .content {
            a {
              line-height: 24px;
            }
            a:hover {
              color: red;
            }
            width: 85px;
            height: 24px;
            display: inline-block;
            font-size: 12px;
          }
          vertical-align: top;
          border-right: 1px solid #eee;
          display: inline-block;
          height: 110px;
          width: 276px;
          padding-left: 20px;
          box-sizing: border-box;
        }
        .item4 {
          .title {
            width: 255px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .content {
            a {
              line-height: 24px;
            }
            a:hover {
              color: red;
            }
            width: 85px;
            height: 24px;
            display: inline-block;
            font-size: 12px;
          }
          vertical-align: top;
          display: inline-block;
          height: 149px;
          width: 276px;
          padding-left: 20px;
          box-sizing: border-box;
        }
        position: absolute;
        width: 1191px;
        height: 181px;
        background-color: white;
        top: 31px;
        left: -1033px;
        box-sizing: border-box;
        padding: 15px 0;
        border: 1px solid #ccc;
        border-top: none;
      }
      margin-left: 0px;
      padding-left: 10px;
      position: relative;
    }
    .khfw:hover {
      background-color: white;
      border-left: 1px solid #ccc;
      padding-left: 4px;
    }
    .khfw {
      z-index: 1000000000;
      position: relative;
      padding-left: 5px;
      .khfwSon {
        border: 1px solid #ccc;
        border-top: none;
        line-height: 0px;
        padding-top: 10px;
        box-sizing: border-box;
        top: 30px;
        left: -1px;
        position: absolute;
        width: 180px;
        height: 249px;
        background-color: white;
        .item {
          padding-left: 15px;
          width: 82px;
          height: 24px;
          background-color: white;
          box-sizing: border-box;
          display: inline-block;
          a {
            display: inline-block;
            line-height: 24px;
          }
          a:hover {
            color: red;
          }
        }
        .item-client {
          color: #666666;
          width: 170px;
          height: 24px;
          font-size: 12px;
          line-height: 24px;
          padding-left: 15px;
        }
        .line2 {
          width: 100%;
          height: 3px;
          border-bottom: 1px dotted #eee;
        }
      }
    }
    .qycg:hover {
      background-color: white;
      border-left: 1px solid #ccc;
      padding-left: 4px;
    }
    .qycg {
      z-index: 1000000000;
      position: relative;
      padding-left: 5px;
      .qycgSon {
        border: 1px solid #ccc;
        border-top: none;
        position: absolute;
        width: 157px;
        height: 94px;
        background-color: white;
        top: 30px;
        left: -1px;
        padding: 15px;
        box-sizing: border-box;
        line-height: 0px;
        div {
          width: 56px;
          height: 24px;
          display: inline-block;
          box-sizing: border-box;
          white-space: nowrap;
          a {
            line-height: 24px;
          }
          a:hover {
            color: red;
          }
        }
      }
    }
    .wdjd {
      margin-left: 0;
      padding-left: 10px;
      position: relative;
      z-index: 1000000000;
      box-sizing: border-box;
      .wdjdSon {
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-top: none;
        position: absolute;
        top: 30px;
        left: -1px;
        width: 282px;
        height: 170px;
        background-color: white;
        .top {
          width: 282px;
          height: 100px;
          box-sizing: border-box;
          border-bottom: 1px solid #f1f1f1;
          padding: 15px;
          line-height: 0px;
          div {
            a {
              line-height: 24px;
            }
            a:hover {
              color: red;
            }
            width: 126px;
            height: 24px;
            display: inline-block;
            box-sizing: border-box;
          }
        }
        .bottom {
          padding: 15px;
          width: 282px;
          height: 70px;

          div {
            a {
              line-height: 24px;
            }
            a:hover {
              color: red;
            }
            width: 126px;
            height: 24px;
            display: inline-block;
            box-sizing: border-box;
          }
        }
      }
    }
    .wdjd:hover {
      background-color: white;
      border-left: 1px solid #ccc;
      padding-left: 9px;
    }
    li {
      margin-left: 10px;
    }
    a {
      line-height: 30px;
      font-size: 12px;
    }
    .line {
      width: 1px;
      height: 10px;
      background-color: grey;
    }
    .fa-chevron-down {
      font-size: 12px;
      color: #999;
      padding-left: 5px;
      padding-right: 10px;
    }
  }
  height: 100%;
  box-sizing: border-box;
}
</style>