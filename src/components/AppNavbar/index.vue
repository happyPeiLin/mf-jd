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
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
          </div>
          <div>
            <a href="#">北京</a>
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
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
            </div>
            <div class="item2">
              <div class="title">行业频道</div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
            </div>
            <div class="item3">
              <div class="title">生活服务</div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
            </div>
            <div class="item4">
              <div class="title">更多精选</div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
              <div class="content">
                <a href="#">新品首发</a>
              </div>
            </div>
          </div>
        </li>
        <li class="line"></li>
        <li class="sjjd"  @mouseover="hoverSjjd" @mouseout="outSjjd">
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
import { sjjd } from "../../assets/sjjd.jpg";
export default {
  data() {
    return {
      location: 0,
      wdjd: 0,
      qycg: 0,
      khfw: 0,
      wzdh: 0,
      sjjd: 0,
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
    hoverSjjd(){
      this.sjjd = 1;
    },
    outSjjd(){
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
      position: absolute;
      top: 30px;
      left: 0px;
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
  }
  .nav {
    .sjjd:hover {
      background-color: white;
    }
    .sjjd {
      .sjjdSon {
        position: absolute;
        left: 0px;

      }
      position: relative;
      margin-left: 0px;
      padding-left: 10px;
      padding-right: 5px;
    }
    .wzdh:hover {
      background-color: white;
    }
    .wzdh {
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
        width: 1190px;
        height: 181px;
        background-color: white;
        top: 30px;
        left: -1038px;
        box-sizing: border-box;
        padding: 15px 0;
      }
      margin-left: 0px;
      padding-left: 10px;
      position: relative;
    }
    .khfw:hover {
      background-color: white;
    }
    .khfw {
      position: relative;
      padding-left: 5px;
      .khfwSon {
        line-height: 0px;
        padding-top: 10px;
        box-sizing: border-box;
        top: 30px;
        left: 0px;
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
    }
    .qycg {
      position: relative;
      padding-left: 5px;
      .qycgSon {
        position: absolute;
        width: 157px;
        height: 94px;
        background-color: white;
        top: 30px;
        left: 0px;
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
    height: 100%;
    box-sizing: border-box;
    .wdjd {
      margin-left: 0;
      padding-left: 10px;
      position: relative;
      .wdjdSon {
        position: absolute;
        top: 30px;
        left: 0px;
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
}
</style>