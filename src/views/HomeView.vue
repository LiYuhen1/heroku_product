<template>
  <div style="background: #000;">

  <!--this is hero section-->
    <div class="hero">
      <NavBar/>
      <div class="herolable">
        <h1>Explore the full Potential in your genes. </h1>
        <p>PolygenRx is a pharmaceutical company dedicated to genetically informed drug discovery and precision medicine for complex disorders. We are excited about the prospect of using genetics to revolutionise the treatment of complex human disorders through drug target discovery and precision medicine. </p>
        <div class="btn" style="margin-top: 40px;"><button><nav><router-link to="/platform">Learn More</router-link></nav></button></div>
      </div>
    </div>

  <!--this is second section-->
    <div class="second">
      <div class="right">
        <h1>Matching people to their optimal treatment</h1>
        <p>Our propriety platform is essentially a matchmaking service between patients and drugs, allowing treatment to be optimised for each individual using their unique combination of genetic risk factors. This approach increases the likelihood of a newly developed drug achieving approval and can also be used to rescue drugs that have previously failed in clinical trials.</p>
        <div class="btn" style="margin-top: 40px;"><button><nav><router-link to="/results">Learn More</router-link></nav></button></div>
      </div>
    </div>

  <!--this is board section-->
    <div class="board">
      <div class="column hover1">
        <div @click="$router.push('/platform')">
          <figure><img src="../assets/images/home_3.png" /><span class="centered">Our Platform</span></figure>
        </div>
        <div @click="$router.push('/results')">
          <figure><img src="../assets/images/home_5.png" /><span class="centered">Our resutls</span></figure>
        </div>
      </div>
      <div class="column hover1">
        <div @click="$router.push('/about')">
          <figure><img src="../assets/images/home_6.png" /><span class="centered">About Us</span></figure>
        </div>
        <div @click="$router.push('/career')">
          <figure><img src="../assets/images/home_7.png" /><span class="centered">Opportunities</span></figure>
       </div>
      </div>
    </div>

  <!--this is newEvent section-->
    <div class="newEvent">
      <h1>Latest News & Events</h1>
      <div class="hover2 column1">
        <div @click="$router.push('/eventList')">
          <figure><img src="../assets/images/home_8.png" /></figure>
        </div>
        <div @click="$router.push('/eventList')">
          <figure><img src="../assets/images/home_9.png" /></figure>
        </div>
        <div @click="$router.push('/eventList')">
          <figure><img src="../assets/images/home_10.png" /></figure>
        </div>
      </div>
    </div>
  <!--this is footer section-->
    <div class="footer">
      <FooterLabel />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooterLabel from '@/components/FooterLabel'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterLabel,
  },
}
</script>
<style scoped>

.hero{
  background-image: url("../assets/images/home_1.png");
  background-size: cover;
  width: 100%;
  height: 800px;
}

.second{
  background: url("../assets/images/home_2.png");
  background-size: cover;
  width: 100%;
  height: 800px;
}

.herolable{
  margin: 0 260px;
  width: 30%;
  padding: 120px 0;
  text-align: left;
  color: #fff;
}

.right{
  position: absolute;
  right: 200px;
  width: 300px;
  padding: 100px 0;
  color: #fff;
  text-align: right;
}
.board{
  margin: 100px 0 0 150px;
}
.column{
  margin: 15px 15px 15px;
}
.column:last-child{
    padding-bottom: 60px;
}
.column::after{
    content: '';
    clear: both;
    display: block;
}
.column div{
  position: relative;
  float: left;
  width: 500px;
  height: 500px;
  margin: 0 0 0 25px;
  padding: 0;

  text-align: center;
}
.centered{
 position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50% -50%);
  font-size: 40px;
  -webkit-text-stroke: 4.5px white;
  letter-spacing: 0.1em;
}
.column figure{
  width: 500px;
  height: 500px;
  margin: 0;
  padding: 0;
  overfolw: hidden;
}
.hover1 figure img{
  width: 500px;
  height: auto;
  transition: .3s ease-in-out;
}
figure span{
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50% -50%);
  font-size: 30px;
  -webkit-text-stroke: 4.5px white;
  letter-spacing: 0.1em;
  transition-property: top left;
  transition-duration: .4s;
}
.hover1 figure:hover img{
  width: 525px;
}
.hover1 figure:hover span{
  top: 54%;
  left: 34%;
  font-size: 40px;
}

.newEvent{
  color: #fff;
}
.column1{
  margin: 15px 15px 15px 100px;
}
.column1:last-child{
    padding-bottom: 60px;
}
.column1::after{
    content: '';
    clear: both;
    display: block;
}
.column1 div{
  position: relative;
  float: left;
  width: 400px;
  height: 800px;
  margin: 0 0 0 25px;
  padding: 0;
  border: 4px solid rgba(0,0,0,0.5);
}
.column1 figure{
  width: 400px;
  height: 800px;
  margin: 0;
  padding: 0;
  overfolw: hidden;
}
.column1 figure img{
  width: 400px;
  height: 800px;
}
.hover2 figure img{
  opacity: .8;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
}
.hover2 figure:hover img{
  opacity: 1;
}
.hover2 div:hover{
  border: 4px solid #00EBFF;
}

.table{
  content: "";
  clear: both;
  display: table;
  padding: 0 100px 0 100px;
}
.colum{
  float: left;
  width: 10%;
  padding: 0 30px;
}

.colum img{
  width: 90%;
  margin: 50px;
}
.btn button{
    background-color: #41B9FC;
    color: #FFF;
    border-width: 0;
    height: 50px;
    width: 200px;
    font-size: 110%;
    border-radius: 62px;
}
nav a{
  color: #fff;
  text-decoration: none;
}
</style>
