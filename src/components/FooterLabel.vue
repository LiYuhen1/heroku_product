<template>
    <div class="footer">
        <div class="column">
            <div class="icon_content">
               <div class="icon">PolygenRx</div>
               <div class="social">
                <div><img src="../assets/images/icon_1.png" /></div>
                <div><img src="../assets/images/icon_2.png" /></div>
                <div><img src="../assets/images/icon_3.png" /></div>
               </div>
            </div>
            <div class="content" style="margin-right: 30px;">
                <div class="title">Contact Us</div>
                <div id="email">{{ email }}</div>
                <div id="address">{{ address }}</div>
            </div>
            <div class="content">
                <div class="title">Solutions</div>
                <nav>
                <div><router-link to="/platform">Platform</router-link></div>
                <div><router-link to="/results">Results</router-link></div>
                <div><router-link to="/about">About Us</router-link></div>
                <div><router-link to="/career">Career</router-link></div>
                <div><router-link to="/contact">Contact</router-link></div>
                </nav>
            </div>
            <div class="content">
                <div class="title">Legal</div>
                <nav>
                <div><router-link to="/privacyPolicy">Privacy Policy</router-link></div>
                <div>Cookie Policy</div>
                </nav>
            </div>

            <div></div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'FooterLabel',
    data(){
        return{
            email: 'contact@polygenrx.com',
            address: 'Newcastle, NSW, Australia'
        }
    }
}
</script>

<style scoped>
.footer{
    background: #000;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    color: #fff;
}
.column{
  width: auto;
  height: 800px;
  padding: 300px 0 0 160px;
}
.column div{
  position: relative;
  float: left;
  width: 150px;
  height: 500px;
  padding: 0;
  text-align: left;
  margin-left: 50px;
}
.icon_content{
    margin-right: 300px;
    margin-left: 100px;
    margin-top: 20px;
}
.icon_content div{
    height: auto;
}
.content div{
    width: 200px;
    height: auto;
    margin-bottom: 10px;
}
.icon{
    font-size: 40px;
    -webkit-text-stroke: 4px white;
    letter-spacing: 0.1em;
    height: auto;
}
.title{
    font-weight: 900;
    font-size: 17px;
}
.social{
    margin-top: 40px;
}
.social div{
    position: relative;
    float: left;
    width: 30px;
    height: 30px;
    background: #fff;
    padding: 0;
    margin: 0 10px;
}
.social img{
    width: 30px;
    height: 30px;
}
nav a{
    color: #fff;
    text-decoration: none;
}
nav a:hover{
    color: #1592E6;
}
</style>
