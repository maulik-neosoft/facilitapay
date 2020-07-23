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
       <router-link to="/subject/bank-account/add"> <b-button right variant="primary">Add</b-button> </router-link>
      </div>
    </div>
  </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-left">Bank Account list</h4>
            <p class="card-title-desc text-left">
             List people registered as subjects for transactions
            </p>

            <div class="table-responsive mb-0">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Account number</th>
                    <th>Branch number</th>
                    <th>Bank Name</th>
                    <th>Owner document number</th>
                    <th>Owner name</th>
                    <th>Currency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"> a0d4-f02b025d1a9f</th>
                    <td><router-link to="/subject/bank-account/1/detail">052903</router-link></td>
                    <td>0003</td>
                    <td>Banco do Brasil</td>
                    <td>12345678901</td>
                    <td>Account owner name</td>
                    <td>BRL</td>
                  </tr>
                  <tr>
                    <th scope="row"> a0d4-f02b025d1a9f</th>
                    <td><router-link to="/subject/bank-account/1/detail">052903</router-link></td>
                    <td>0003</td>
                    <td>Banco do Brasil</td>
                    <td>12345678901</td>
                    <td>Account owner name</td>
                    <td>BRL</td>
                  </tr>
                  <tr>
                    <th scope="row"> a0d4-f02b025d1a9f</th>
                    <td><router-link to="/subject/bank-account/1/detail">052903</router-link></td>
                    <td>0003</td>
                    <td>Banco do Brasil</td>
                    <td>12345678901</td>
                    <td>Account owner name</td>
                    <td>BRL</td>
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
          text: 'Bank Account',
          href: '/subject/bank-account'
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
