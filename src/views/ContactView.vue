<template>
    <div class="contactUs">
        <div class="hero">
            <NavBar />
            <div><h1>Get in touch with Us and know more about Our team and projects</h1></div>
        </div>
        <div class="content">
            <h1>Contact Us</h1>
            <div class="column">
                <div class="sec1">
                    <h1>We would love to hear from you</h1>
                    <h2>Email</h2>
                    <p>contact@polygenrx.com</p>
                    <h2>Location</h2>
                    <p>Newcastle, NSW, Australia</p>
                </div>
                <div class="sec2"><img src="../assets/images/Contact_2.png" /></div>
            </div>
        </div>
        <div class="footer">
            <FooterLabel />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterLabel from '@/components/FooterLabel.vue'
export default{
    name: 'ContactView',
    components:{
        NavBar,
        FooterLabel,
    }
}
</script>

<style scoped>
.hero{
    background: url("../assets/images/ContactUs_1.png");
    height: 800px;
    width: 100%;
}
.hero div h1{
    color: #fff;
    margin: 13% 30%;
}
.content{
    height: 1200px;
    margin-top: 100px;
}
.column{
    width: 80%;
    margin: auto;
}
.column div{
    position: relative;
    float: left;
    margin-left: 40px;
    margin-top: 70px;
}
.sec1{
    width: 30%;
    text-align: left;
}
.sec2 img{
    width: 70%;
}
</style>
