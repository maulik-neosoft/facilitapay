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
    </div>
    <div class="row">
      <div class="col-lg-12 text-left">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"><strong> Banco do Brasil Detail</strong></h4>
            <br/>
            <div class="row">
              <div class="col-2">
                <strong>Account Number:</strong>
              </div>
              <div class="col-4">
                052903
              </div>
              <div class="col-2">
                <strong>Branch number:</strong>
              </div>
              <div class="col-4">
                0003
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-2">
                <strong>Bank Name:</strong>
              </div>
              <div class="col-4">
                Banco do Brasil
              </div>
              <div class="col-2">
                <strong>Bank Code:</strong>
              </div>
              <div class="col-4">
              001
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-2">
                <strong>Owner document number:</strong>
              </div>
              <div class="col-4">
                12345678901
              </div>
              <div class="col-2">
                <strong>Owner name:</strong>
              </div>
              <div class="col-4">
                Account owner name
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-2">
                <strong>Currency:</strong>
              </div>
              <div class="col-4">
                BRL
              </div>
              <div class="col-2">
                <strong>IBAN:</strong>
              </div>
              <div class="col-4">
                DE89 3704 0044 0532 0130
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-2">
                <strong>Routing Number:</strong>
              </div>
              <div class="col-4">
               011103093
              </div>
              <div class="col-2">
                <strong>Branch Number:</strong>
              </div>
              <div class="col-4">
                0003
              </div>
            </div>

          </div>
          <!-- end card-body -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/views/layout/Main.vue'
export default {
  name: 'BankAccount',
  components: {
    Layout
  },
  data() {
    return {
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
          text: 'Detail',
          active: true
        }
      ]
    }
  }
}
</script>
