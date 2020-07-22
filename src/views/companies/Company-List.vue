<template>
  <Layout>
      <div class="row align-items-center">
    <div class="col-sm-6">
      <div class="page-title-box">
        <!-- <h4 class="font-size-18">{{ title }}</h4> -->
        <div class="page-title-right">
          <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="float-right d-none d-md-block">
       <router-link to="/subject/companies/add"> <b-button right variant="primary">Create</b-button> </router-link>
      </div>
    </div>
  </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-left">Companies list</h4>
            <p class="card-title-desc text-left">
             List companies registered as subjects for transactions
            </p>

            <div class="table-responsive mb-0">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Document Number</th>
                    <th>Document Type</th>
                    <th>Social Name</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Creation Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"> 1</th>
                    <td><router-link to="/subject/companies/1/detail">38125238901004</router-link></td>
                    <td>cnpj</td>
                    <td>Company Social Name LTDA</td>
                    <td>Company Fantasy Name</td>
                    <td>company@email.com</td>
                    <td>2015-04-01</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>38125238901004</td>
                    <td>cnpj</td>
                    <td>Company Social Name LTDA</td>
                    <td>Company Fantasy Name</td>
                    <td>company@email.com</td>
                    <td>2015-04-01</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>38125238901004</td>
                    <td>cnpj</td>
                    <td>Company Social Name LTDA</td>
                    <td>Company Fantasy Name</td>
                    <td>company@email.com</td>
                    <td>2015-04-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
// @ is an alias to /src
import Layout from '@/views/layout/Main.vue'
// import PageHeader from '@/components/Page-Header'
export default {
  name: 'Companies',
  components: {
    Layout
    // PageHeader
  },
  data() {
    return {
      title: 'Form Elements',
      items: [
        {
          text: 'Subject',
          href: '/'
        },
        {
          text: 'Company',
          href: '/subject/companies'
        },
        {
          text: 'List',
          active: true
        }
      ]
    }
  }
}
</script>
