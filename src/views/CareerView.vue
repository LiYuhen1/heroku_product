<template>
    <div class="career">
        <div class="hero">
            <NavBar />
            <div><h1>Work with us and our platform</h1></div>
        </div>
        <div class="content">
            <div class="whyUs">
                <h1>Why Us</h1>
                <div class="column" style="height: 400px;">
                    <div class="sec1"><img src="../assets/images/Career_2.png" /></div>
                    <div class="sec2">
                        <h2>Our platform lead the new generation of Genomic analyze</h2>
                        <p>
                            We are seeking collaboration and/or commercial partners to further advance this opportunity towards market update. This could be in the form of licensing or a capital investment. Interested parties are highly encouraged to contact us (hyperlink) to facilitate an introductory discussion.
                        </p>
                    </div>
                </div>
            </div>
            <div class="strength">
                <div class="column">
                    <div class="sec3">
                        <img src="../assets/images/Career_3.png" />
                        <h1>We have great innovative ideas</h1>
                    </div>
                    <div class="sec3">
                        <img src="../assets/images/Career_4.png" />
                        <h1>We have the best team atmosphere</h1>
                    </div>
                    <div class="sec3">
                        <img src="../assets/images/Career_5.png" />
                        <h1>We have long term reliable business partners</h1>
                    </div>
                </div>
            </div>
            <div class="joinUs">
                <h1>Join Us</h1>
                <div class="column" style="height: 400px;">
                    <div class="sec1"><img src="../assets/images/Career_6.png" /></div>
                    <div class="sec2">
                        <h2>We are looking for great team member to join us</h2>
                        <p>
                            We are seeking collaboration and/or commercial partners to further advance this opportunity towards market update. This could be in the form of licensing or a capital investment. Interested parties are highly encouraged to contact us (hyperlink) to facilitate an introductory discussion.
                        </p>
                    </div>
                </div>
                <div class="cont">
                    <div class="contactUs">
                        <h1>Contact Us</h1>
                        <p>
                            We are the most reliable team and best working attitude, please feel free to contact us for more information at anytime
                        </p>
                        <div class="btn" style="margin-top: 40px;"><button v-on:click="clicked">Learn More</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <FooterLabel />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterLabel from '@/components/FooterLabel.vue'
export default{
    name: 'CareerView',
    components: {
         NavBar,
         FooterLabel,
        },
    methods:{
        clicked: function(){
            this.$router.push('/contact');
        }
    }
}

</script>

<style scoped>
.hero{
    background: url("../assets/images/Career_1.png");
    height: 800px;
    width: 100%;
}
.hero div{
    color: #fff;
    margin: 13% 33%;
}
.whyUs{
    height: 800px;
    width: 100%;
    margin-top: 100px;
}
.column{
    margin-top: 50px;
}
.column div{
    position: relative;
    float: left;
}
.sec1{
    margin-left: 50px;
}
.sec1 img{
    width: 65%;
}
.sec2{
    text-align: left;
    width: 33%;
    padding: 60px 0;
}
.strength{
    width: 90%;
    margin: auto;
    height: 900px;
}
.sec3{
    width: 33%;
}
.sec3 img{
    width: 99%;
}
.sec3 h1{
    color: #fff;
    position: absolute;
    top: 70%;
    left: 4px;
}
.joinUs{
    margin: 80px 0;
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
.cont{
    background-image: url("../assets/images/Career_7.png");
    background-size: cover;
    height: 600px;
    width: 80%;
    margin: auto;
}
.contactUs{
    color: #fff;
    text-align: left;
    width: 30%;
    padding: 190px 800px;
}
</style>
