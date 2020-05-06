<template>
  <div class="header">
    <div class="w headerW">
      <div class="logo">
        <h1>
          <a href="#"></a>
        </h1>
      </div>
      <div class="center">
        <div class="searchBar">
          <input type="text" value="" />
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

          <ul class="hotWords">
            <li>
              <a style="color:red" href="#">口罩九折购</a>
            </li>
            <li>
              <a href="#">口罩九折购</a>
            </li>
            <li>
              <a href="#">口罩九折购</a>
            </li>
            <li>
              <a href="#">口罩九折购</a>
            </li>
            <li>
              <a href="#">口罩九折购</a>
            </li>
            <li>
              <a href="#">口罩九折购</a>
            </li>
            <li>
              <a href="#">口罩九折购</a>
            </li>
          </ul>
          <ul class="navWords">
            <li>
              <a style="color:#e1251b;font-weight:700" href="#">秒杀</a>
            </li>
            <li>
              <a style="color:#e1251b;font-weight:700" href="#">优惠券</a>
            </li>
            <li>
              <a href="#">PLUS会员</a>
            </li>
            <li>
              <a href="#">品牌闪购</a>
            </li>
            <li>
              <a href="#">拍卖</a>
            </li>
            <li>
              <a href="#">京东家电</a>
            </li>
            <li>
              <a href="#">京东超市</a>
            </li>
            <li>
              <a href="#">京东生鲜</a>
            </li>
            <li>
              <a href="#">京东国际</a>
            </li>
            <li>
              <a href="#">京东金融</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="apple">
        <a href="#"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 140px;
  .headerW {
    background-color: white;
  }
  .logo {
    width: 190px;
    height: 120px;
    display: inline-block;
    margin-top: 15px;
    h1 {
      width: 100%;
      height: 100%;
      margin: 0;
      display: block;
      a {
        background-image: url("../../assets/logo.jpg");
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .center {
    .searchBar {
      .navWords {
        li {
          a:hover{
            color:red
          }
          a {
            font-size: 15px;
            color: #333;
          }
          padding-right: 20px;
        }
        position: absolute;
        top: 75px;
        left: -85px;
        overflow:auto;
        width: 777px;
      }
      .hotWords {
        li {
          a:hover {
            color: red;
          }
          padding-right: 10px;
        }
        font-size: 12px;
        top: 33px;
        left: -43px;
        position: absolute;
      }
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
      width: 550px;
      height: 36px;
      margin-left: 100px;
      margin-top: 30px;
      border: 3px solid #e1251b;
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
      position: relative;
    }
    width: 810px;
    height: 100%;
    display: inline-block;
  }
  .apple{
    a{
      display: block;
      width: 100%;
      height: 100%;
      background-image: url('../../assets/apple.jpg');

    }
    display: inline-block;
    width: 190px;
    height: 100%;
  }
}
</style>