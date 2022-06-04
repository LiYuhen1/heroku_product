<template>
    <div class="privacy">
        <div class="hero">
            <NavBar />
            <div><h1>Privacy Policy</h1></div>
        </div>
        <div class="content">
            <h1>Privacy Policy</h1>
            <div class="sec">
                <h1>Legal</h1>
                <p>
                    PolygenRx is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information. We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
                </p>
                <p>
                    A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at www.aoic.gov.au. We will not use or share your information with anyone except as described in this Privacy Policy.
                </p>
                <p>
                    We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information ("Personal Information") may include, but is not limited to: Name, Email address, Telephone number, Log Data.
                </p>
                <p>
                    PolygenRx may contain links to websites operated by third parties. If you access a third party website through our website(s), personal information may be collected by that third party website. We make no representations or warranties in relation to the privacy practices of any third party provider or website and we are not responsible for the privacy policies or the content of any third party provider or website. Third party providers / websites are responsible for informing you about their own privacy practices and we encourage you to read their privacy policies. Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.
                </p>
                <p>
                    When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years. You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing. PolygenRx pty. Ltd will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information.
                </p>
                <p>
                    In order to protect your Personal Information we may require identification from you before releasing the requested information. It is an important to us that your Personal Information is up to date. We  will  take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.
                </p>
            </div>
            <div class="sec">
                <h1>Policy Updates</h1>
                <p>
                    This Policy may change from time to time and is available on our website.
                </p>
            </div>
            <div class="sec">
                <h1>Privacy Policy Complaints and Enquiries</h1>
                <p>
                    If you have any queries or complaints about our Privacy Policy please write to us at contact@polygenrx.com
                </p>
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
    name: 'PrivacyPolicy',
    components: {
        NavBar,
        FooterLabel
    }
}
</script>

<style scoped>
.hero{
    background-image: url("../assets/images/Privacy.png");
    background-size: cover;
    height: 700px;
}
.hero div{
    color: #fff;
    font-size: 200%;
    margin: 10%;
}
.content{
    margin: 100px 0;
}
.content div{
    width: 40%;
    margin: auto;
}
.sec{
    text-align: left;
}
.sec h1{
    margin-top: 50px;
}
</style>
