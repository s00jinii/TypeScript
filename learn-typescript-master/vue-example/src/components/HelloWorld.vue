<!DOCTYPE html>
<html> <!-- 1. HTML 태그 객체가 생성. -->
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> <!-- CDN 주소 Vue.js를 호출하는 부분-->

</head>
<body>
   <template>
  <div id="example">
  <my-component></my-component>
  </div>
</template>
</body>
</html>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
Vue.component('child', {
  // props 정의
  props: ['message'],
  // 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
  // vm의 this.message로 사용할 수 있습니다.
  template: '<span>{{ message }}</span>'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
