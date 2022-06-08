<template>
  <div class="platform" style="background: #fff;">
    <div class="hero">
      <NavBar/>
      <div class="herolable">
        <h1>What if the results of an inexpensive genome-wide genetic test could be used to target treatment for any common disorder?</h1>
        <p>
          Biomarkers of treatment response can be used as companion diagnostics for precision medicine, but they are complicated to design and most miss important aspects of the patient’s biological variation. Our platform harnesses pharmagenic enrichment scores (PES)  to integrate an individual’s genetics with systems biology and pharmacology to provide a powerful tool for determining if they will respond more readily to almost any drug. The PolygenRx platform can be implemented as a universal companion diagnostic as it is applicable to any disease with sufficient genetic data and corresponding pharmacological agents with known targets or mode of action.
        </p>
      </div>
    </div>

    <div class="content">
      <div class="approach">
        <h1>How it works</h1>
        <div class="approachDetails">
            <h3>Obtaining genetic data from a patient and genetic data related to the disease.</h3>
            <p>
              DNA extracted from blood or saliva can be used to obtain DNA sequence information for millions of markers throughout the genome via a rapid and cost-effective  genotyping method known as a microarray, or through low-coverage whole genome sequencing. We can even use data from an individual’s own direct to consumer genetics profile.
            </p>
            <p>
              We can then compare this data with high-quality information related to how these same genetic markers relate to the risk of disease using publicly available genome-wide association study (GWAS, https://en.wikipedia.org/wiki/Genome-wide_association_study) results. These data are typically gathered from population studies with up to hundreds of thousands of participants and provide the most confident information we have as to how genetics impacts the risk of developing a disorder. These data are available for practically all common human diseases and provides for the power and flexibility of our platform.
            </p>
        </div>

        <div class="approachDetails">
            <h3>Generating the pharmagenic enrichment score.</h3>
            <p>
              We combine the genetic data collected from patients with how those markers impact the risk of the disease of interest in a state-of-the-art statistical genetics approach. The key advantage in our platform is that we direct this information specifically related to the biology involved in the action of the drug, rather than non-selectively across all genetic markers. As a result, a continuous score (the pharmagenic enrichment score) is generated related genetic risk for the disorder specifically amongst genes involved with the pharmacology of the drug in question.
            </p>
        </div>

        <div class="approachDetails">
          <h3>Identifying patients most likely to respond to proposed treatment.</h3>
            <p>
              The pharmagenic enrichment score is scaled relative to an external genetic reference to determine which individuals have a high score. The magnitude of the scaled score is used to priortise which individuals would most benefit from the treatment of interest.
            </p>
        </div>
      </div>

      <div class="advantages">
        <h1>What makes us different</h1>
        <div class="column bul">
          <div class="title" style="width: 600px;">
            <img src="../assets/images/platform_2.png" />
            <h1>We do not focus on a single marker of treatment</h1>
          </div>
          <div class="points">
            <p>
              Competitor companion diagnostics are usually orientated around a single indicator of treatment response, which ignores the biological reality that many factors are involved. We incorporate multiple factors related to the therapeutic target of the drugs, whilst still allowing this complex biological data to be simple to use and clinically interpretable.
            </p>
          </div>
        </div>

        <div class="column bul">
          <div class="title" style="width: 600px;">
            <img src="../assets/images/platform_3.png" />
            <h1>Our platform is not limited to a single disease or drug</h1>
          </div>
          <div class="points">
            <p>
              Currently available companion diagnostic platforms are restricted to a single disease or disease area. We exploit the power of genetics and state of the art statistical approaches to make a universal platform applicable to nearly all common diseases and even rare disorders when sufficient data exists about genetic risk factors across the genome.
            </p>
          </div>
        </div>

        <div class="column bul">
          <div class="title" style="width: 600px;">
            <img src="../assets/images/platform_4.png" />
            <h1>Our platform is interpretable</h1>
          </div>
          <div class="points">
            <p>
              Our approach combines known biological mechanisms with genetics to generate readily interpretable continuous scores. This is enhanced by the scaling step such that each score and its biological significance is relative to a representative population.
            </p>
          </div>
        </div>

        <div class="column bul">
          <div class="title" style="width: 600px;">
            <img src="../assets/images/platform_5.png" />
            <h1>We use the most rigorous genetic data available</h1>
          </div>
          <div class="points">
            <p>
              Our platform leverages genetic factors that are well understood and fixed at birth (common germline variation). In contrast, dynamic and variable state factors used in precision medicine are complicated and subject to rapid changes in response to a host of different stimuli.
            </p>
          </div>
        </div>

        <div class="column bul">
          <div class="title" style="width: 600px;">
            <img src="../assets/images/platform_6.png" />
            <h1>Our platform can support population specific data</h1>
          </div>
          <div class="points">
            <p>
              Existing companion diagnostics cannot take differences between populations into account. Our platform can seamlessly utilise genetic studies from specific populations to maximise the effectiveness of this approach and ensure its equitable use.
            </p>
          </div>
        </div>

        <div></div>
      </div>

      <div class="examples">
          <div class="column">
            <h1 style="margin-bottom: 50px; text-align: left;">Use Examples</h1>
            <p>
              This platform would be ideally suited to the clinical trial process in a range of scenarios. For example, the development pipeline of a novel compound, a new trial for a previously failed or abandoned compound, or a repurposing application. Our pharmagenic enrichment score approach could be used to stratify key trial outcomes by each individual’s score, and thus, provide a mechanism to assess whether a companion diagnostic to accompany this compound is warranted. This could not only rescue drugs that would otherwise fail due to heterogeneity in response, but also more accurately identify suitable target populations.
            </p>
            <p>
              This platform is applicable to practically all common disorders, and even rare disorders when modifier data exists. A small selection of examples include:
            </p>
          </div>
          <div class="column lis">
            <div><img src="../assets/images/platform_7.png" /></div>
            <div><img src="../assets/images/platform_8.png" /></div>
            <div><img src="../assets/images/platform_9.png" /></div>
          </div>
          <div class="column lis">
            <div><img src="../assets/images/platform_10.png" /></div>
            <div><img src="../assets/images/platform_11.png" /></div>
            <div><img src="../assets/images/platform_12.png" /></div>
          </div>
          <div class="column lis">
            <div><img src="../assets/images/platform_13.png" /></div>
            <div><img src="../assets/images/platform_14.png" /></div>
            <div><img src="../assets/images/platform_15.png" /></div>
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
  name: 'PlatformView',
  components: {
    NavBar,
    FooterLabel,
  },

}

</script>
<style scoped>
.hero{
  background-image: url("../assets/images/Platform_1.png");
  background-size: cover;
  width: 100%;
  height: 800px;
  color: #fff;
  text-align: center;
}
.herolable{
 margin: 200px 250px;
 width: 65%;
}
.herolable p{
  text-align: left;
}
.approach{
  margin-top: 100px;
}
.approachDetails{
  width: 40%;
  margin: auto;
  text-align: left;
}
.approachDetails h3{
  margin-top: 50px;
}
.column{
  margin: 0 100px;
}
.column:last-child{
  padding-bottom: 60px;
}
.column div{
  height: auto;
  width: 480px;
  position: relative;
  float: left;
  text-align: left;
  margin: 50px 40px;
  padding: 0;
}
.step1 img{
  width: 130%;
  margin-top: 80px;
  margin-left: 40px;
}
.step2 img{
  width: 90%;
  margin-top: 20px;
  margin-left: 100px;
}
.step3 img{
  width: 90%;
  margin-top: 50px;
  margin-left: 40px;
}
.advantages{
  margin: 50px 0;
  height: 2100px;
}
.bul div{
  height: 300px;
}
.points p{
  margin-left: 8%;
}
.title img{
 width: 100%;
 height: auto;
}
.title h1{
  top: 60%;
  left: 4%;
  position: absolute;
  color: white;
  text-align: center;
}
.examples{
  height: 1400px;
  margin-left: 40px;
}
.examples p{
  width: 50%;
  height: auto;
  text-align: left;
}
.lis div{
  width: 330px;
  margin: 50px 80px 0 0;
}
.lis img{
  width: 100%;
  height: 100%;
}
</style>
