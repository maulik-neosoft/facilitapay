<template>
  <Layout>
      <div class="row align-items-center">
    <div class="col-sm-6">
      <div class="page-title-box">
        <div class="page-title-right">
          <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="float-right d-none d-md-block">
       <router-link to="/subject/people/add"> <b-button right variant="primary">Add</b-button> </router-link>
      </div>
    </div>
  </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-left">People list</h4>
            <p class="card-title-desc text-left">
             List people registered as subjects for transactions
            </p>

            <div class="table-responsive mb-0">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Document Number</th>
                    <th>Document Type</th>
                    <th>Social Name</th>
                    <th>Email</th>
                    <th>Monthly Avg. Income</th>
                    <th>Creation Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"> 1</th>
                    <td><router-link to="/subject/people/1/detail">38125238901004</router-link></td>
                    <td>cnpj</td>
                    <td>Company Social Name LTDA</td>
                    <td>company@email.com</td>
                    <td>4000</td>
                    <td>2015-04-01</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><router-link to="/subject/people/1/detail">38125238901004</router-link></td>
                    <td>cnpj</td>
                    <td>Company Social Name LTDA</td>
                    <td>company@email.com</td>
                    <td>4000</td>
                    <td>2015-04-01</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><router-link to="/subject/people/1/detail">38125238901004</router-link></td>
                    <td>cnpj</td>
                    <td>Company Social Name LTDA</td>
                    <td>company@email.com</td>
                    <td>4000</td>
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
export default {
  name: 'Companies',
  components: {
    Layout
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
          text: 'People',
          href: '/subject/people'
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
