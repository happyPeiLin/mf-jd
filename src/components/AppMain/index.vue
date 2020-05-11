<template>
  <div class="main">
    <div class="mainTop w">
      <div class="hider1" @mouseenter="number = 0">
        <a href="#">
          <img src="../../assets/backgroundL.jpg" alt="#" />
        </a>
        <a href="#">
          <img src="../../assets/backgroundR.jpg" alt="#" />
        </a>
      </div>
      <div class="hider2" @mouseenter="number = 1"></div>
      <div class="hider3" @mouseenter="number = 1"></div>
      <div class="w">
        <div class="wrap">
          <transition name="custom-zoom">
            <div class="mainNav" v-if="number">
              <div class="cover"></div>
              <div class="cover2"></div>
              <ul>
                <li>
                  <a href="#">家用电器</a>
                  <div class="father">
                    <main-one></main-one>
                  </div>
                </li>
                <li>
                  <a href="#">手机</a>
                  <span>/</span>
                  <a href="#">运营商</a>
                  <span>/</span>
                  <a href="#">数码</a>
                  <div class="father">
                    <main-two></main-two>
                  </div>
                </li>
                <li>
                  <a href="#">电脑</a>
                  <span>/</span>
                  <a href="#">办公</a>
                  <div class="father">
                    <main-three></main-three>
                  </div>
                </li>
                <li>
                  <a href="#">家用电器</a>
                  <div class="father">
                    <main-one></main-one>
                  </div>
                </li>
                <li>
                  <a href="#">手机</a>
                  <span>/</span>
                  <a href="#">运营商</a>
                  <span>/</span>
                  <a href="#">数码</a>
                  <div class="father">
                    <main-two></main-two>
                  </div>
                </li>
                <li>
                  <a href="#">电脑</a>
                  <span>/</span>
                  <a href="#">办公</a>
                  <div class="father">
                    <main-three></main-three>
                  </div>
                </li>
                <li>
                  <a href="#">家用电器</a>
                  <div class="father">
                    <main-one></main-one>
                  </div>
                </li>
                <li>
                  <a href="#">手机</a>
                  <span>/</span>
                  <a href="#">运营商</a>
                  <span>/</span>
                  <a href="#">数码</a>
                  <div class="father">
                    <main-two></main-two>
                  </div>
                </li>
                <li>
                  <a href="#">电脑</a>
                  <span>/</span>
                  <a href="#">办公</a>
                  <div class="father">
                    <main-three></main-three>
                  </div>
                </li>
                <li>
                  <a href="#">家用电器</a>
                  <div class="father">
                    <main-one></main-one>
                  </div>
                </li>
                <li>
                  <a href="#">手机</a>
                  <span>/</span>
                  <a href="#">运营商</a>
                  <span>/</span>
                  <a href="#">数码</a>
                  <div class="father">
                    <main-two></main-two>
                  </div>
                </li>
                <li>
                  <a href="#">电脑</a>
                  <span>/</span>
                  <a href="#">办公</a>
                  <div class="father">
                    <main-three></main-three>
                  </div>
                </li>
                <li>
                  <a href="#">家用电器</a>
                  <div class="father">
                    <main-one></main-one>
                  </div>
                </li>
                <li>
                  <a href="#">手机</a>
                  <span>/</span>
                  <a href="#">运营商</a>
                  <span>/</span>
                  <a href="#">数码</a>
                  <div class="father">
                    <main-two></main-two>
                  </div>
                </li>
                <li>
                  <a href="#">电脑</a>
                  <span>/</span>
                  <a href="#">办公</a>
                  <div class="father">
                    <main-three></main-three>
                  </div>
                </li>
                <li>
                  <a href="#">家用电器</a>
                  <div class="father">
                    <main-one></main-one>
                  </div>
                </li>
                <li>
                  <a href="#">手机</a>
                  <span>/</span>
                  <a href="#">运营商</a>
                  <span>/</span>
                  <a href="#">数码</a>
                  <div class="father">
                    <main-two></main-two>
                  </div>
                </li>
                <li>
                  <a href="#">电脑</a>
                  <span>/</span>
                  <a href="#">办公</a>
                  <div class="father">
                    <main-three></main-three>
                  </div>
                </li>
              </ul>
            </div>
          </transition>

          <transition name="custom-zoom">
            <div class="sliderBig" v-if="number">
              <el-carousel :interval="5000" height="470px" arrow="always">
                <el-carousel-item v-for="item in list" :key="item.img">
                  <a href="#">
                    <img :src="item.img" />
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
          </transition>
        </div>

        <div class="mainRight">
          <div class="user">
            <a href="#" class="avatar"></a>
            <a href="#" class="welcome">Hi~欢迎光临京东！</a>
            <a href="#" class="login">登录 |</a>
            <a href="#" class="reg">注册</a>
            <a href="#" class="new">新人福利</a>
            <a href="#" class="plus">PLUS会员</a>
          </div>
          <div class="news">
            <h4>京东快报</h4>
            <a href="#" class="more">
              更多
              <i class="fa fa-caret-right" aria-hidden="true"></i>
            </a>
            <ul class="hot">
              <li>
                <a href="#">
                  <span>热评</span>
                  <p>更多像污染源说不，啊手动阀第三方</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>热门</span>
                  <p>处女座福音，超续航啊手动阀示范点</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>推荐</span>
                  <p>三星CJG52显示屏评论阿斯顿发生</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>热门</span>
                  <p>信仰级显卡推荐</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="service">
            <div>
              <a href="#">
                <img src="../../assets/hf.png" alt="#" />
                <div>话费</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/jp.png" alt="#" />
                <div>机票</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/jd.png" alt="#" />
                <div>酒店</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/yx.png" alt="#" />
                <div>游戏</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/jyk.png" alt="#" />
                <div>加油卡</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/hcp.png" alt="#" />
                <div style="left:10px">火车票</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/zc.png" alt="#" />
                <div>众筹</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/lc.png" alt="#" />
                <div>理财</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/bt.png" alt="#" />
                <div>白条</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/dyp.png" alt="#" />
                <div style="left:10px">电影票</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/qyg.png" alt="#" />
                <div style="left:10px">企业购</div>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../assets/lpk.png" alt="#" />
                <div style="left:10px">礼品卡</div>
              </a>
            </div>
          </div>
        </div>
        <div class="sliderSmall" @mouseenter="number = 1">
          <a href="#" class="son1"></a>
          <a href="#" class="son2"></a>
          <a href="#" class="son3"></a>
          <el-carousel :interval="5000" height="470px" arrow="always">
            <el-carousel-item v-for="item in rightSlider" :key="item.img">
              <img :src="item.img" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="mainMs w">
      <transition name="el-zoom-in-top">
        <div class="windowTop" v-show="windowTop">
          <div class="windowTopC w">
            <a class="logo" href="#"></a>

            <div class="searchBar">
              <input type="text" value />
              <a href="#">
                <i class="fa fa-camera-retro fa-1x"></i>
              </a>
              <button>
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
              <div class="shopCart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>
                  <a href="#">我的购物车</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="msBar" id="msBar">
        <a href="#">京东秒杀</a>
        <div></div>
        <a href="#" class="special">特色优选</a>
        <div></div>
        <a href="#">频道广场</a>
        <div></div>
        <a href="#">为你推荐</a>
        <div></div>
        <a href="#">客服</a>
        <div></div>
        <a href="#">反馈</a>
        <div></div>
        <a href="#">顶部</a>
      </div>
      <a href="#" class="msLeft">
        <div class="title">京东秒杀</div>
        <div class="content">下场秒杀 倒计时</div>
        <div class="time">
          <div class="num" style="margin-left:30px">01</div>
          <div class="colon">:</div>
          <div class="num">{{minute}}</div>
          <div class="colon">:</div>
          <div class="num">{{mark}}{{second}}</div>
        </div>
      </a>
      <div class="msCenter">
        <a href="#" class="son1"></a>
        <a href="#" class="son2"></a>
        <a href="#" class="son3"></a>
        <a href="#" class="son4"></a>
        <el-carousel :interval="50000" height="260px" arrow="always" indicator-position="none">
          <el-carousel-item v-for="item in msCenter" :key="item.img">
            <img :src="item.img" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="msRight">
        <a href="#" class="son"></a>

        <el-carousel :interval="5000" height="470px" arrow="always">
          <el-carousel-item v-for="item in msRight" :key="item.img">
            <img :src="item.img" style="z-index：99999999" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="mainTejia w">
      <div class="tejia">
        <div class="tejiaSon1" v-show="tejiaNum === 1">
          <a href="#" class="tejiaGrandson1"></a>
          <a href="#" class="tejiaGrandson2"></a>
          <a href="#" class="tejiaGrandson3"></a>
          <a href="#" class="tejiaGrandson4"></a>
          <a href="#" class="tejiaGrandson5"></a>
        </div>
        <div class="tejiaSon2" v-show="tejiaNum === 2">
          <a href="#" class="tejiaGrandson1"></a>
          <a href="#" class="tejiaGrandson2"></a>
          <a href="#" class="tejiaGrandson3"></a>
          <a href="#" class="tejiaGrandson4"></a>
          <a href="#" class="tejiaGrandson5"></a>
        </div>
        <div class="tejiaSon3" v-show="tejiaNum === 3">
          <a href="#" class="tejiaGrandson1"></a>
          <a href="#" class="tejiaGrandson2"></a>
          <a href="#" class="tejiaGrandson3"></a>
          <a href="#" class="tejiaGrandson4"></a>
          <a href="#" class="tejiaGrandson5"></a>
        </div>
        <div class="tejiaSon4" v-show="tejiaNum === 4">
          <a href="#" class="tejiaGrandson1"></a>
          <a href="#" class="tejiaGrandson2"></a>
          <a href="#" class="tejiaGrandson3"></a>
          <a href="#" class="tejiaGrandson4"></a>
          <a href="#" class="tejiaGrandson5"></a>
        </div>
        <div class="tejiaSon5" v-show="tejiaNum === 5">
          <a href="#" class="tejiaGrandson1"></a>
          <a href="#" class="tejiaGrandson2"></a>
          <a href="#" class="tejiaGrandson3"></a>
          <a href="#" class="tejiaGrandson4"></a>
          <a href="#" class="tejiaGrandson5"></a>
        </div>
        <div class="top">
          <a href="#" class="mrtj">
            每日特价
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </a>
          <div class="title">
            <a href="#" @mouseover="tejiaNum = 1">精选</a>
            <a href="#" @mouseover="tejiaNum = 2">健康</a>
            <a href="#" @mouseover="tejiaNum = 3">数码</a>
            <a href="#" @mouseover="tejiaNum = 4">美食</a>
            <a href="#" @mouseover="tejiaNum = 5">预告</a>
          </div>
        </div>
      </div>
      <div class="shangou">
        <a href="#" class="shangouSon1"></a>
        <a href="#" class="shangouSon2"></a>
        <a href="#" class="shangouSon3"></a>
        <a href="#" class="shangouSon4"></a>
        <a href="#" class="shangouSon5"></a>
        <a href="#" class="shangouSon6"></a>
        <a href="#" class="ppsg">
          品牌闪购
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </a>
        <a href="#" class="sgr"></a>
        <div class="shangouR"></div>
      </div>
    </div>
    <div class="mainFaxian w">
      <a href="#" class="faxianL">
        <img src="../../assets/faxianSon.jpg" alt />
      </a>
      <div class="faxianR" id="fr" @mouseenter="enterFaxian" @mouseleave="leaveFaxian">
        <div class="faxianWrap">
          <a href="#" class="son1"></a>
          <a href="#" class="son2"></a>
          <a href="#" class="son3"></a>
          <a href="#" class="son4"></a>
          <a href="#" class="son5"></a>
          <a href="#" class="son6"></a>
          <a href="#" class="son7"></a>
          <a href="#" class="son8"></a>
          <a href="#" class="son9"></a>
          <a href="#" class="son10"></a>
          <a href="#" class="son11"></a>
          <a href="#" class="son12"></a>
          <a href="#" class="son13"></a>
          <a href="#" class="son14"></a>
          <a href="#" class="son15"></a>
          <img src="../../assets/smoothSlider.jpg" alt="#" />
        </div>
      </div>
    </div>
    <div class="mainPindao w">
      <div class="pindaoT">
        <img src="../../assets/pindao.jpg" alt="#" />
      </div>
      <div class="pindaoC">
        <div class="pindaoCl">
          <a href="#" class="pindao1"></a>
          <a href="#" class="pindao2"></a>
        </div>
        <div class="pindaoCr">
          <a href="#" class="pindao3"></a>
          <a href="#" class="pindao4"></a>
          <a href="#" class="pindao5"></a>
          <a href="#" class="pindao6"></a>
        </div>
      </div>
      <div class="pindaoB">
        <a href="#" class="pindao7"></a>
        <a href="#" class="pindao8"></a>
        <a href="#" class="pindao9"></a>
        <a href="#" class="pindao10"></a>
      </div>
    </div>
  </div>
</template>

<script>
import mainOne from "./mainOne";
import mainTwo from "./mainTwo";
import mainThree from "./mainThree";

import smallSlider1 from "../../assets/smallSlider1.jpg";
import smallSlider2 from "../../assets/smallSlider2.jpg";
import smallSlider3 from "../../assets/smallSlider3.jpg";

import lbbig1 from "../../assets/lbbig1.jpg";
import lbbig2 from "../../assets/lbbig2.jpg";
import lbbig3 from "../../assets/lbbig3.jpg";
import lbbig4 from "../../assets/lbbig4.jpg";
import lbbig5 from "../../assets/lbbig5.jpg";
import lbbig6 from "../../assets/lbbig6.jpg";
import lbbig7 from "../../assets/lbbig7.jpg";
import lbbig8 from "../../assets/lbbig8.jpg";

import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";
import s8 from "../../assets/s8.jpg";
import s9 from "../../assets/s9.jpg";

import ms1 from "../../assets/ms1.jpg";
import ms2 from "../../assets/ms2.jpg";
import ms3 from "../../assets/ms3.jpg";

import sms1 from "../../assets/sms1.jpg";
import sms2 from "../../assets/sms2.jpg";

export default {
  components: { mainOne, mainTwo, mainThree },
  data() {
    return {
      windowTop: 0,
      scrollTop: 1,
      timer: undefined,
      tejiaNum: 1,
      mark: 0,
      minute: 35,
      second: 5,
      number: 1,
      list: [
        {
          img: lbbig1
        },
        {
          img: lbbig2
        },
        {
          img: lbbig3
        },
        {
          img: lbbig4
        },
        {
          img: lbbig5
        },
        {
          img: lbbig6
        },
        {
          img: lbbig7
        },
        {
          img: lbbig8
        }
      ],
      rightSlider: [
        { img: smallSlider1 },
        { img: smallSlider2 },
        { img: smallSlider3 }
      ],
      msCenter: [
        {
          img: ms1
        },
        {
          img: ms2
        },
        { img: ms3 }
      ],
      msRight: [{ img: sms1 }, { img: sms2 }]
    };
  },
  methods: {
    test() {
      setInterval(() => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 670) {
          this.windowTop = 1;
          document.getElementById("msBar").style.position = "fixed";
          document.getElementById("msBar").style.top = "120px";
          document.getElementById("msBar").style.right = "120px";
        } else {
          this.windowTop = 0;
          document.getElementById("msBar").style.position = "absolute";
          document.getElementById("msBar").style.top = "0px";
          document.getElementById("msBar").style.right = "-80px";
        }
      }, 100);
    },
    enterFaxian() {
      clearInterval(this.timer);
    },
    leaveFaxian() {
      this.moveSlider();
    },
    moveSlider() {
      var step = 1;
      var obj = document.getElementById("fr");

      this.timer = setInterval(() => {
        if (obj.scrollLeft < 2106) {
          obj.scrollLeft += step;
        } else {
          obj.scrollLeft = 0;
        }
      }, 10);
    },
    hello() {
      setInterval(() => {
        if (this.second > 0) {
          this.second--;
        } else {
          this.second = 59;
          this.minute--;
        }
        if (this.second < 10) {
          this.mark = 0;
        } else {
          this.mark = "";
        }
      }, 1000);
    }
  },
  created() {
    this.hello();
  },
  mounted() {
    this.moveSlider();
    this.test();
  }
};
</script>

<style lang="scss" scoped>
.test {
  background-color: green;
  height: 100px;
  width: 100px;
  position: fixed;
  top: 100px;
  left: 100px;
}
.main {
  .mainTop {
    .custom-zoom-enter-active,
    .custom-zoom-leave-active {
      opacity: 1;
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1),
        -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1),
        -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
        opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
        opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1),
        -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      -webkit-transform-origin: right;
      transform-origin: right;
    }

    .custom-zoom-enter,
    .custom-zoom-leave-active {
      opacity: 0;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    .hider2 {
      position: absolute;
      width: 1000px;
      height: 30px;
      top: -12px;
      opacity: 0;
      left: 0px;
      background-color: black;
    }
    .hider3 {
      position: absolute;
      width: 1000px;
      height: 30px;
      top: 480px;
      left: 0px;
      background-color: black;
      opacity: 0;
      z-index: 10;
    }
    .hider1 {
      a {
        display: inline-block;
      }
      position: absolute;
      width: 1062px;
      height: 470px;
      top: 10px;
      left: 0px;
    }

    .w {
      .service {
        div {
          a:hover div {
            color: red;
          }
          a:hover img {
            opacity: 1;
          }
          a {
            div {
              position: absolute;
              top: 37px;
              left: 15px;
              width: 50px;
              height: 20px;
              font-size: 12px;
              border: none;
              color: #333333;
            }
            img {
              position: absolute;
              width: 28px;
              height: 28px;
              top: 5px;
              left: 15px;
              opacity: 0.7;
            }
          }

          display: inline-block;
          width: 63px;
          height: 59px;
          position: relative;
        }
        width: 190px;
        height: 238px;
        font-size: 0px;
      }
      .mainRight {
        .new:hover {
          background-color: #c81623;
          color: white !important;
        }
        .plus:hover {
          color: white !important;
          background-color: #c81623;
        }
        .new {
          display: block;
          position: absolute;
          top: 67px;
          left: 16px;
          width: 70px;
          height: 25px;
          background-color: red;
          font-size: 12px;
          line-height: 25px;
          padding-left: 8px;
          border-radius: 12px;
          color: white;
        }
        .plus {
          display: block;
          position: absolute;
          top: 67px;
          left: 100px;
          width: 70px;
          height: 25px;
          background-color: black;
          font-size: 12px;
          line-height: 25px;
          padding-left: 5px;
          border-radius: 12px;
          color: #e5d790;
        }
        .news {
          .hot {
            li {
              a:hover {
                color: red;
              }
              a {
                p {
                  display: inline-block;
                  font-size: 12px;
                  margin: 0;
                  width: 119px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  height: 16px;
                  line-height: 19px;
                }
                span {
                  padding-left: 4px;
                  background-color: rgba(225, 37, 27, 0.08);
                  color: #e1251b;
                  width: 35px;
                  height: 16px;
                  margin-right: 6px;
                  display: inline-block;
                  font-size: 12px;
                  height: 16px;
                  line-height: 17px;
                }
                width: 100%;
                height: 100%;
                display: inline-block;
              }
              white-space: nowrap;
              display: inline-block;
              height: 16px;
              margin-bottom: 6px;
              text-overflow: ellipsis;
              width: 160px;
            }
            width: 160px;
            height: 88px;
            margin: 0 15px;
            padding: 0;
            margin-left: 10px;
            margin-top: 5px;
          }
          .more:hover {
            color: red;
          }
          .more {
            display: inline-block;
            margin-left: 60px;
            font-size: 12px;
          }
          h4 {
            margin: 15px 0 0 10px;
            display: inline-block;
          }
          width: 190px;
          height: 130px;
        }
        .user {
          a:hover {
            color: red;
          }
          .welcome {
            font-size: 12px;
            display: inline-block;
            position: absolute;
            top: 15px;
            left: 70px;
          }
          .login {
            font-size: 13px;
            display: inline-block;
            position: absolute;
            top: 35px;
            left: 70px;
            color: black;
          }
          .reg {
            font-size: 13px;
            display: inline-block;
            position: absolute;
            top: 35px;
            left: 108px;
            color: black;
          }
          .avatar {
            width: 44px;
            height: 44px;
            display: inline-block;
            border-radius: 22px;
            background-image: url("../../assets/avatar.jpg");
            background-size: contain;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);
            margin-top: 10px;
            margin-left: 20px;
          }
          width: 190px;
          height: 102px;
          position: relative;
        }
        width: 190px;
        height: 470px;
        float: right;
        margin-left: 10px;
        background-color: white;
      }
      .sliderSmall {
        .son1:hover {
          background-color: red;
          opacity: 0.2;
          cursor: pointer;
        }
        .son1 {
          position: absolute;
          width: 190px;
          height: 150px;
          top: 0px;
          left: 0px;
          opacity: 0;
          z-index: 10000;
        }
        .son2:hover {
          background-color: red;
          opacity: 0.2;
          cursor: pointer;
        }
        .son2 {
          position: absolute;
          width: 190px;
          height: 150px;
          top: 160px;
          left: 0px;
          opacity: 0;
          z-index: 10000;
        }
        .son3:hover {
          background-color: red;
          opacity: 0.2;
          cursor: pointer;
        }
        .son3 {
          position: absolute;
          width: 190px;
          height: 150px;
          top: 320px;
          left: 0px;
          opacity: 0;
          z-index: 10000;
        }
        width: 190px;
        height: 470px;
        float: left;
        margin-left: 10px;
        background-color: white;
        float: right;
        position: relative;
      }
      .sliderBig {
        width: 590px;
        height: 470px;
        float: left;
        margin-left: 10px;
      }
      .mainNav {
        .cover {
          position: absolute;
          width: 10px;
          height: 470px;
          background-color: #f4f4f4;
          left: 190px;
        }
        .cover2 {
          position: absolute;
          width: 10px;
          height: 470px;
          background-color: #f4f4f4;
          left: 790px;
        }
        ul {
          li:hover div {
            display: block;
            z-index: 99999999999;
          }
          li:hover {
            background-color: #d9d9d9;
          }

          li {
            .father {
              margin-left: 2px;
              z-index: 100000;
              display: none;
              position: absolute;
              width: 1000px;
              height: 470px;
              top: 0px;
              left: 188px;
              background-color: white;
              box-shadow: 3px 3px 5px #888888;
            }
            span {
              font-size: 12px;
              color: #636363;
              padding: 0px 2px;
            }
            a:hover {
              color: red;
            }
            a {
              font-size: 14px;
              color: #333333;
            }
            padding-left: 18px;
            height: 25px;
            line-height: 25px;
            width: 190px;
          }
          padding: 10px 0;
        }
        position: relative;
        float: left;
        width: 190px;
        height: 470px;
        background-color: white;
        border-right: 2px solid #f4f4f4;
      }
      position: relative;
      top: 10px;
      height: 470px;
      // background-color: white;
    }
  }
  .mainMs {
    .windowTop {
      .windowTopC {
        .searchBar {
          .shopCart:hover {
            border: 1px solid red;
          }
          .shopCart {
            span {
              a {
                color: red;
              }
              margin-left: 46px;
              font-size: 12px;
              margin-top: 3px;
              display: inline-block;
              font-weight: 700;
            }
            .fa-shopping-cart {
              position: absolute;
              top: 8px;
              left: 20px;
              color: red;
            }
            width: 132px;
            height: 36px;
            position: absolute;
            right: -155px;
            top: -3px;
            border: 1px solid #e3e4e5;
          }
          button:hover {
            background-color: #c81623;
          }
          button {
            .fa-search {
              color: white;
            }
            display: block;
            float: left;
            width: 10px;
            height: 100%;
            background-color: #e1251b;
            outline: none;
            border: none;
            width: 48px;
            margin-left: 20px;
          }
          a {
            display: block;
            float: left;
            height: 100%;
            line-height: 28px;
          }
          input {
            float: left;
            width: 460px;
            height: 30px;
            border: 1px solid transparent;
            padding-left: 17px;
            outline: none;
            font-size: 12px;
            color: grey;
          }
          top: 10px;
          left: 290px;
          position: absolute;
          width: 550px;
          height: 36px;
          border: 3px solid #e1251b;
        }
        .logo {
          position: absolute;
          top: 0px;
          left: 0px;
          display: inline-block;
          width: 142px;
          height: 50px;
          background: url("../../assets/toplogo.jpg");
          background-size: 100% 100%;
        }
        height: 50px;
        position: relative;
      }
      position: fixed;
      top: 0px;
      left: 0px;
      height: 52px;
      width: 100%;
      z-index: 999999999999;
      border-bottom: 2px solid red;
      background-color: white;
    }
    .msBar {
      a:hover {
        color: white;
        background-color: red;
      }
      .special {
        color: red;
      }
      div {
        width: 40px;
        height: 1px;
        background-color: #dedede;
        margin-left: 10px;
      }
      a {
        color: #333333;
        font-weight: 500;
        padding: 10px;
        padding: 15px 10px 10px 15px;
        font-size: 14px;
        width: 60px;
        height: 60px;
        display: block;
      }
      right: -80px;
      top: 0px;
      position: absolute;
      width: 60px;
      height: 420px;
      background-color: white;
    }
    .msRight {
      .son:hover {
        opacity: 0.05;
      }
      .son {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 200px;
        height: 259px;
        background-color: red;
        z-index: 999;
        opacity: 0.01;
      }
      position: relative;
      float: left;
      width: 200px;
      height: 260px;
    }
    .msCenter {
      a:hover {
        opacity: 0.05;
      }
      a {
        top: 0px;
        width: 200px;
        display: block;
        position: absolute;
        height: 260px;
        z-index: 9;
        opacity: 0.01;
        background-color: red;
      }
      .son1 {
        left: 0px;
      }
      .son2 {
        left: 200px;
      }
      .son3 {
        left: 400px;
      }
      .son4 {
        left: 600px;
      }
      width: 800px;
      height: 260px;
      float: left;
      position: relative;
    }
    .msLeft {
      .time {
        .num {
          float: left;
          width: 30px;
          height: 30px;
          background-color: black;
          color: white;
          font-size: 20px;
          font-weight: bold;
          padding-top: 3px;
          text-align: center;
        }
        .colon {
          color: white;
          font-size: 20px;
          font-weight: bold;
          float: left;
          width: 20px;
          height: 30px;
          text-align: center;
        }
        width: 190px;
        height: 30px;
        margin-top: 20px;
      }
      .content {
        color: white;
        font-size: 15px;
        font-weight: bold;
        margin-top: 80px;
        text-align: center;
        width: 190px;
      }
      .title {
        font-size: 30px;
        color: white;
        width: 190px;
        height: 50px;
        margin-top: 38px;
        text-align: center;
        font-weight: bold;
      }
      display: block;
      float: left;
      width: 190px;
      height: 260px;
      background: url("../../assets/ms.jpg");
      background-size: 100% 100%;
    }
    position: relative;
    height: 260px;
    margin-top: 30px;
  }
  .mainTejia {
    .tejia {
      .tejiaGrandson3 {
        position: absolute;
        width: 171px;
        height: 118px;
        top: 3px;
        left: 382px;
        background-color: green;
        opacity: 0.01;
      }
      .tejiaGrandson4 {
        position: absolute;
        width: 171px;
        height: 118px;
        top: 140px;
        left: 191px;
        background-color: green;
        opacity: 0.01;
      }
      .tejiaGrandson5 {
        position: absolute;
        width: 171px;
        height: 118px;
        top: 140px;
        left: 381px;
        background-color: green;
        opacity: 0.01;
      }
      .tejiaGrandson5:hover {
        opacity: 0.1;
      }
      .tejiaGrandson4:hover {
        opacity: 0.1;
      }
      .tejiaGrandson3:hover {
        opacity: 0.1;
      }
      .tejiaGrandson2:hover {
        opacity: 0.1;
      }
      .tejiaGrandson2 {
        position: absolute;
        width: 171px;
        height: 118px;
        top: 3px;
        left: 191px;
        background-color: green;
        opacity: 0.01;
      }
      .tejiaGrandson1:hover {
        opacity: 0.1;
      }
      .tejiaGrandson1 {
        position: absolute;
        width: 171px;
        height: 266px;
        top: 0px;
        left: 1px;
        background-color: green;
        opacity: 0.01;
      }
      .tejiaSon1 {
        display: block;
        position: absolute;
        width: 550px;
        height: 270px;
        top: 56px;
        left: 20px;
        background: url("../../assets/tj1.jpg");
      }
      .tejiaSon2 {
        display: block;
        position: absolute;
        width: 550px;
        height: 270px;
        top: 56px;
        left: 20px;
        background: url("../../assets/tj2.jpg");
      }
      .tejiaSon3 {
        display: block;
        position: absolute;
        width: 550px;
        height: 270px;
        top: 56px;
        left: 20px;
        background: url("../../assets/tj3.jpg");
      }
      .tejiaSon4 {
        display: block;
        position: absolute;
        width: 550px;
        height: 270px;
        top: 56px;
        left: 20px;
        background: url("../../assets/tj4.jpg");
      }
      .tejiaSon5 {
        display: block;
        position: absolute;
        width: 550px;
        height: 270px;
        top: 56px;
        left: 20px;
        background: url("../../assets/tj5.jpg");
      }
      .top {
        .title {
          a:hover {
            color: red;
            border-bottom: 2px solid red;
          }
          a {
            display: inline-block;
            width: 30px;
            height: 21px;
            font-size: 15px;
            margin-right: 25px;
            position: relative;
          }
          margin-top: 5px;
          width: 275px;
          height: 21px;
          display: block;
          float: right;
        }
        .mrtj:hover i {
          color: red;
        }
        .mrtj {
          i {
            font-size: 20px;
          }
          font-size: 25px;
          color: black;
          font-weight: bold;
        }

        width: 590px;
        top: 60px;
        padding-left: 20px;
        padding-top: 20px;
      }
      width: 590px;
      height: 340px;
      float: left;
      margin-right: 10px;
      display: block;
      background-color: white;
      position: relative;
    }
    .shangou {
      .shangouSon1:hover {
        opacity: 0.4;
      }
      .shangouSon2:hover {
        opacity: 0.4;
      }
      .shangouSon3:hover {
        opacity: 0.4;
      }
      .shangouSon4:hover {
        opacity: 0.4;
      }
      .shangouSon5:hover {
        opacity: 0.4;
      }
      .shangouSon6:hover {
        opacity: 0.4;
      }
      .shangouSon1 {
        z-index: 999;
        width: 130px;
        height: 103px;
        background-color: white;
        opacity: 0.01;
        position: absolute;
        top: 20px;
        left: 303px;
      }
      .shangouSon2 {
        z-index: 999;
        width: 130px;
        height: 103px;
        background-color: white;
        opacity: 0.01;
        position: absolute;
        top: 20px;
        left: 433px;
      }
      .shangouSon3 {
        z-index: 999;
        width: 130px;
        height: 103px;
        background-color: white;
        opacity: 0.01;
        position: absolute;
        top: 123px;
        left: 303px;
      }
      .shangouSon4 {
        z-index: 999;
        width: 130px;
        height: 103px;
        background-color: white;
        opacity: 0.01;
        position: absolute;
        top: 123px;
        left: 433px;
      }
      .shangouSon5 {
        z-index: 999;
        width: 130px;
        height: 103px;
        background-color: white;
        opacity: 0.01;
        position: absolute;
        top: 226px;
        left: 303px;
      }
      .shangouSon6 {
        z-index: 999;
        width: 130px;
        height: 103px;
        background-color: white;
        opacity: 0.01;
        position: absolute;
        top: 226px;
        left: 433px;
      }
      .shangouR {
        width: 260px;
        height: 309px;
        background: url("../../assets/sgrR.jpg");
        background-size: 100% 100%;
        position: absolute;
        top: 20px;
        left: 300px;
      }
      .sgr:hover {
        opacity: 0.7;
      }
      .sgr {
        width: 270px;
        height: 265px;
        display: block;
        margin-top: 15px;
        margin-left: 10px;
        background: url("../../assets/sgr.jpg");
        background-size: 100% 100%;
      }
      .ppsg:hover i {
        color: red;
      }
      .ppsg {
        i {
          font-size: 20px;
        }
        font-size: 25px;
        color: black;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 20px;
        display: inline-block;
      }
      width: 590px;
      height: 340px;
      float: left;
      display: block;
      background-color: white;
      position: relative;
    }
    height: 340px;
    margin-top: 20px;
  }
  .mainFaxian {
    .faxianR:hover {
      overflow-x: scroll;
    }

    .faxianR::-webkit-scrollbar-track {
      /*滚动条里面的轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background: #ededed;
    }

    .faxianR::-webkit-scrollbar-thumb {
      /*滚动条中的滚动块*/
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #535353;
    }

    .faxianR::-webkit-scrollbar {
      height: 10px;
    }
    .faxianR {
      .faxianWrap {
        a:hover {
          opacity: 0.3;
        }
        .son1 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 0px;
        }
        .son2 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 200px;
        }
        .son3 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 400px;
        }
        .son4 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 600px;
        }
        .son5 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 800px;
        }
        .son6 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 1000px;
        }
        .son7 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 1200px;
        }
        .son8 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 1400px;
        }
        .son7 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 1200px;
        }
        .son8 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 1400px;
        }
        .son9 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 1600px;
        }
        .son10 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 1850px;
        }
        .son11 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 2100px;
        }
        .son12 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 2300px;
        }
        .son13 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 2500px;
        }
        .son14 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 2700px;
        }
        .son15 {
          display: block;
          background-color: white;
          opacity: 0.01;
          width: 200px;
          height: 260px;
          position: absolute;
          top: 0px;
          left: 2900px;
        }
        width: 3096px;
        height: 260px;
        position: relative;
      }

      overflow-y: hidden;
      overflow-x: hidden;
      white-space: nowrap;
      width: 990px;
      height: 260px;
      float: right;
    }
    .faxianL:hover img {
      opacity: 1;
    }
    .faxianL {
      img {
        margin-left: 119px;
        margin-top: 74px;
        opacity: 0;
      }
      width: 190px;
      height: 260px;
      display: block;
      float: left;
      background: url("../../assets/faxian.jpg");
    }
    height: 260px;
    position: relative;
    margin-top: 20px;
  }
  .mainPindao {
    a:hover {
      opacity: 0.7;
    }
    .pindaoB {
      .pindao7 {
        flex: 1;
        height: 180px;
        margin-right: 10px;
        background: url("../../assets/pindao7.jpg");
      }
      .pindao8 {
        flex: 1;
        height: 180px;
        margin-right: 10px;
        background: url("../../assets/pindao8.jpg");
      }
      .pindao9 {
        flex: 1;
        height: 180px;
        margin-right: 10px;
        background: url("../../assets/pindao9.jpg");
      }
      .pindao10 {
        flex: 1;
        height: 180px;
        background: url("../../assets/pindao10.jpg");
      }
      display: flex;
      width: 1190px;
      height: 180px;
      margin-top: 10px;
    }
    .pindaoC {
      .pindaoCl {
        .pindao1 {
          flex: 1;
          width: 290px;
          margin-right: 10px;
          background: url("../../assets/pindao1.jpg");
        }
        .pindao2 {
          flex: 1;
          width: 290px;
          margin-right: 10px;
          background: url("../../assets/pindao2.jpg");
        }
        display: flex;
        flex: 1;
        height: 370px;
      }
      .pindaoCr {
        .pindao3 {
          width: 290px;
          height: 180px;
          margin-right: 10px;
          margin-bottom: 10px;
          background: url("../../assets/pindao3.jpg");
        }
        .pindao4 {
          width: 290px;
          height: 180px;
          margin-bottom: 10px;
          background: url("../../assets/pindao4.jpg");
        }
        .pindao5 {
          width: 290px;
          height: 180px;
          margin-right: 10px;
          margin-bottom: 10px;
          background: url("../../assets/pindao5.jpg");
        }
        .pindao6 {
          width: 290px;
          height: 180px;
          margin-bottom: 10px;
          background: url("../../assets/pindao6.jpg");
        }
        flex-wrap: wrap;
        display: flex;
        align-content: flex-start;
        flex: 1;
        height: 370px;
      }
      display: flex;
      width: 1190px;
      height: 370px;
    }
    .pindaoT {
      img:hover {
        cursor: text;
      }
      img {
        width: 280px;
        height: 85px;
        display: block;
      }
      height: 85px;
      width: 1190px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    height: 646px;
    background-color: #f4f4f4;
  }

  width: 100%;
  background-color: #f4f4f4;
  position: relative;
}
</style>