<template>
  <div class="footer">
    <div class="footer1 w">
      <img src="../../assets/dkhs.jpg" alt="#" />
    </div>
    <div class="line"></div>
    <div class="footer2 w">
      <ul>
        <li>购物指南</li>
        <li>
          <a href="#">购物流程</a>
        </li>
        <li>
          <a href="#">会员介绍</a>
        </li>
        <li>
          <a href="#">生活旅行</a>
        </li>
      </ul>
      <ul>
        <li>购物指南</li>
        <li>
          <a href="#">购物流程</a>
        </li>
        <li>
          <a href="#">会员介绍</a>
        </li>
        <li>
          <a href="#">生活旅行</a>
        </li>
      </ul>
      <ul>
        <li>购物指南</li>
        <li>
          <a href="#">购物流程</a>
        </li>
        <li>
          <a href="#">会员介绍</a>
        </li>
        <li>
          <a href="#">生活旅行</a>
        </li>
      </ul>
      <ul>
        <li>购物指南</li>
        <li>
          <a href="#">购物流程</a>
        </li>
        <li>
          <a href="#">会员介绍</a>
        </li>
        <li>
          <a href="#">生活旅行</a>
        </li>
      </ul>
      <ul>
        <li>购物指南</li>
        <li>
          <a href="#">购物流程</a>
        </li>
        <li>
          <a href="#">会员介绍</a>
        </li>
        <li>
          <a href="#">生活旅行</a>
        </li>
      </ul>
      <div class="footer2R">
        <div class="footer2Rt">京东自营覆盖区县</div>
        <div class="footer2Rm">京东已向全国2661个区县提供自营配送服务，支持货到付款、<br />pos机刷卡和售后上门服务。</div>
        <a href="#" class="footer2Rb">查看详情></a>
      </div>
    </div>
    <div class="footer3 w">
      <img src="../../assets/footer.jpg" alt="#">
    </div>
    <!-- <button class="button" @click="ceshi">asdf</button> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:1,
    }
  },
  methods:{
    ceshi(){
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log("ceshi " + scrollTop)
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  position: fixed;
  right:100px;
  top:100px;
}
.footer {
  .footer3{
    img{
      width: 1086px;
      height:212px;
    }
    align-items: center;
    justify-content: center;
    display: flex;
    height: 265px;
    background-color: #f4f4f4;
  }
  .footer2 {
    .footer2R {
      .footer2Rb:hover{
        color:red;
      }
      .footer2Rb {
        color: #666;
        font-size: 12px;
        line-height: 22px;
        font-weight: initial;
        padding-left: 137px;
      }
      .footer2Rt {
        padding-left: 20px;
        font-size: 14px;
        color: #666666;
        display: block;
        height: 22px;
        font-weight: bold;
      }
      .footer2Rm {
        color: #666;
        font-size: 12px;
        line-height: 22px;
        font-weight: initial;
      }
      margin-top: 10px;
      width: 200px;
      height: 150px;
    }
    ul {
      li {
        a:hover {
          color: red;
        }
        a {
          color: #666;
          font-size: 12px;
          line-height: 22px;
          font-weight: initial;
        }
        font-size: 14px;
        color: #666666;
        display: block;
        height: 22px;
        font-weight: bold;
      }
      margin-top: 10px;
      flex: 1;
      padding-left: 0;
    }
    border-bottom: 1px solid #dedede;
    display: flex;
    height: 160px;
    margin: 20px auto;
    margin-bottom: 0px;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #dedede;
  }
  .footer1 {
    img {
      height: 47px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    background-color: #f4f4f4;
  }
  width: 100%;
  height: 1000px;
  background-color: #f4f4f4;
  z-index: 9999999999;
}
</style>