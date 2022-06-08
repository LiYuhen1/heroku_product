<template>
  <div class="results" style="background: #fff;">

    <div class="hero">
        <NavBar/>
        <div class="herolable">
            <div><h1>Accelerating precision medicine with the pharmagenic enrichment score platform</h1></div>
        </div>
    </div>

    <div class="content">
    <!--This is Our Results section-->
        <div class="platResults">
            <h1>Our Results</h1>
            <p>Our pharmagenic enrichment score platform has been subjected to extensively pre-clinical validation using genetic data from hundreds of thousands of participants. This work has produced exciting results that have been peer-reviewed by other expert scientists.</p>
            <p>For example, the pharmagenic enrichment score has been featured in the highest-ranked, and most prestigious, genetics journal Nature Reviews Genetics.</p>
        </div>
    <!--This is Key take aways section-->
        <div class="platResults">
            <h1>Key Take-aways</h1>
            <h2>Our platform reveals unique biological insights</h2>
            <p>
                The pharmagenic enrichment score approach has been demonstrated to identify individuals with elevated genetic risk amongst biology that can be targeted by drugs.
            </p>
            <p>
                Intriguingly, this includes patients who otherwise have low overall genetic risk for a disorder when assessed using the traditional approach taking the entire DNA sequence (genome) into account. In other words, genetic risk identified by our platform related to the mode of action of drugs is more sensitive for treatment formulation than risk information from throughout the genome.
            </p>
            <p>
                Recent data using this platform in schizophrenia has even shown schizophrenia patients with low genome-wide genetic risk are more likely to have high risk in biological systems targeted by candidate drugs. Taken together, our extensive preclinical data supports that our platform reveals insights that are unique and informative for treatment.
            </p>
            <h2>Our platform is scalable to a wide variety of disorders with different genetic architectures</h2>
            <p>
                A key advantage of platform is that it is scalable and flexible, in stark contrast to existing approaches for genetics informed precision medicine which are orientated around either a single disease or drug.
            </p>
            <p>
                We have published data from large cohorts for multiple disorders: including schizophrenia, bipolar disorder, lung disorders, and pneumonia. However, this approach can be applied to practically any disorder with sufficient genetic data available and upcoming projects include applications in cardiology, oncology, and immunology. In addition, our platform is quick and cost-effective to implement without need for long periods of analysis and computation.
            </p>
        </div>
    <!--This is next steps section-->
        <div class="platResults">
            <h1>Next Steps</h1>
            <p>We are now in the planning phase for clinical trials of our platform in comparison to usual clinical care that are scheduled to begin in late 2022.</p>
        </div>
    <!--This is research block-->
        <div class="relatedResearch">
            <h1>Related Research</h1>
            <div class="column">
                <a href="https://doi.org/10.1038/s41576-021-00387-z"><div class="lists">
                    <img src="../assets/images/Science_16.png" />
                    <div>
                        <h1>PES Research</h1>
                        <p>Reay, W.R., Cairns, M.J., Nat Rev Genet 22, 658–671 (2021).</p>
                        <h2>Advancing the use of genome-wide association studies for drug repurposing</h2>
                    </div>
                </div></a>
                <a href="https://doi.org/10.1038/s41598-020-57795-0"><div class="lists">
                    <img src="../assets/images/Science_17.png" />
                    <div>
                        <h1>PES Research</h1>
                        <p>Reay, W.R., Atkins, J.R., Carr, V.J. et al., Sci Rep 10, 879 (2020).</p>
                        <h2>Pharmacological enrichment of polygenic risk for precision medicine in complex disorders</h2>
                    </div>
                </div></a>
                <a href="https://doi.org/10.7554/eLife.63115"><div class="lists">
                    <img src="../assets/images/Science_18.png" />
                    <div>
                        <h1>PES Research</h1>
                        <p>Reay, W.R., El Shair, S.I., Geaghan, M.P, et al., medRxiv (2021). </p>
                        <h2>Genetic association and causal inference converge on hyperglycaemia as a modifiable factor to improve lung function</h2>
                    </div>
                </div></a>
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
    name: 'ResultsView',
    components: {
        NavBar,
        FooterLabel,
    },
    methods: {
       toggle(){
           this.showSection = !this.showSection
       }
    },
    data(){
        return{
            showSection: false,
            questionTitle: 'This is the Question',
            message: 'This is the description of the new that can help you identify all the potential genetic diseases within a gene. This is a new kind of genetic analysis that can help you identify all the potential genetic diseases within a gene.',
            items: [{index: '1', title: 'This is the Question', answer: 'This is the description of the new that can help you identify all the potential genetic diseases within a gene. This is a new kind of genetic analysis that can help you identify all the potential genetic diseases within a gene.'},
                    {index: '2', title: 'This is the Question', answer: 'This is the description of the new that can help you identify all the potential genetic diseases within a gene. This is a new kind of genetic analysis that can help you identify all the potential genetic diseases within a gene.'},
                    {index: '3', title: 'This is the Question', answer: 'This is the description of the new that can help you identify all the potential genetic diseases within a gene. This is a new kind of genetic analysis that can help you identify all the potential genetic diseases within a gene.'}],
            collapsed1: true,
        }
    }
}
</script>

<style scoped>
.hero{
    background-image: url("../assets/images/Science_4.png");
    background-size: cover;
    width: 100%;
    height: 800px;
}
.herolable{
    color: #fff;
    text-align: left;
    width: 25%;
    margin: 200px 0 0 290px;
}
.content{
    margin-top: 80px;
}
.content div h1{
    margin-top: 60px;
}
.platResults{
    margin: auto;
    width: 40%;
}
.platResults p, h2{
    text-align: left;
    margin-top: 36px;
}
.relatedResearch{
    height: 700px
}
.column{
    margin: auto;
    width: 1370px;
}
.column div{
    position: relative;
    float: left;
    width: 390px;
    height: 500px;
    margin: 30px 33px;
}
.lists img{
    width: 100%;
    height: 100%;
}
.lists div{
    width: 80%;
    margin: auto;
    color: #fff;
    position: absolute;
    top: 4%;
    left: 15%;
    text-align: left;
}
.q&a{
    margin-top: 50px;
}
.questionList{
    border-bottom: 1px solid black;
    width: 40%;
    margin: auto;
    padding: 10px 0;
}
.questionList div{
    text-align: left;
}
.collapside1{
    cursor: pointer;
    font-size: 25px;
    margin-top: 50px;
}
.answers {
    padding: 10px 18px
}
.collapside1:after{
    content: '\25BC';
    font-size: 23px;
    color: black;
    float: right;
    margin-left: 5px;
}
.active:after{
    content: '\25B2';
}
.footer{
    margin-top: 100px;
}
</style>
