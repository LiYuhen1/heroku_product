<template>
  <div class="about">
    <div class="hero">
      <NavBar />
      <div class="herolable">
        <h1>Revolutionising precision medicine</h1>
      </div>
    </div>

    <div class="content">
      <div>
        <h1>PolygenRx Management</h1>
        <div class="roleDescription">
          <div class="Sec">
            <h3>Murray Cairns</h3>
            <p>Professor Murray Cairns BSc (hons) PhD – co-founder and CEO</p>
            <img src="../assets/images/Murray_Head.png"/>
            <div class="roleDescrip" style="">
              <p>
                Professor Murray Cairns is an internationally recognised expert in molecular biology and genetics with over 25 years experience in both the pharmaceutical industry and academic research. Specifically, Professor Cairns was a senior scientist at Johnson and Johnson Research working in ground-breaking developments nucleic acid-based diagnostics and treatment. Professor Cairns has led several large competitively funded research projects that resulted research outputs described in more than 170 peer reviewed publications receiving excess of 16,000 citations. “Our platform  provides an unprecedented opportunity to use recent advances in in complex disease genetics to transform both clinical practice and drug development.” - Professor Cairns.
              </p>
            </div>
            
          </div>
          <div class="Sec">
            <h3>William Reay</h3>
            <p>Dr William Reay BBiomedSc (hons) PhD – co-founder and CSO</p>
            <img src="../assets/images/William_Head.png"/>
            <div class="roleDescrip">
              <p>
                Dr William Reay is an award-winning statistical geneticist who specialises in using complex genetic data to derive clinically important insights for human disease. Dr Reay has been led analysis for several large-scale studies published in some of the most highly cited journals in the biomedical literature, including Nature Reviews Genetics, Science Advances, and Molecular Psychiatry. His research has also received international coverage in the mainstream press. “I believe that the PolygenRx pharmagenic enrichment score platform is an exciting opportunity to accelerate the use of genetics in routine clinical practice and transform how drugs are prescribed” – Dr Reay.
              </p>
            </div>
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
import NavBar from '@/components/NavBar.vue'
import FooterLabel from '@/components/FooterLabel.vue'
export default{
  name: 'AboutView',
  components: {
    NavBar,
    FooterLabel
  }
}


</script>
<style scoped>
.hero{
  background: url("../assets/images/AboutUs_1.png");
  height: 800px;
  width: 100%;
}
.herolable{
  color: #fff;
  width: 50%;
  text-align: left;
  margin: 13% 33%;
}
.content{
  margin-top: 100px;
  height: 1500px;
}
.roleDescription{
  width: 40%;
  margin: auto;
}
.Sec{
  margin: 60px 0;
  }
.Sec img{
  border-radius: 50%;
  width: 30%;
  height: 30%;
}
.roleDescrip{
  width: 90%; 
  margin: auto;
  text-align: left;
}
</style>
