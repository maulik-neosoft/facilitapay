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
      <div class="col-lg-10 text-left offset-1">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Creates a company subject.</h4>
            <form action="#" @submit.prevent="typeForm">
              <div class="form-group">
                <label> Account number</label>
                <input
                  v-model="typeform.name"
                  type="text"
                  class="form-control"
                  placeholder="Account number"
                  name="name"
                  :class="{
                    'is-invalid': typesubmit && $v.typeform.name.$error,
                  }"
                />
                <div
                  v-if="typesubmit && $v.typeform.name.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.typeform.name.required"
                    >This value is required.</span
                  >
                </div>
              </div>

              <div class="form-group">
                <label>Branch number</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="text"
                    name="password"
                    class="form-control"
                    placeholder="Branch number"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Bank name</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="text"
                    name="password"
                    class="form-control"
                    placeholder="Branch name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Bank code</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="text"
                    name="password"
                    class="form-control"
                    placeholder="Branch code"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Owner document number</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Owner document number"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Owner name</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Owner name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Currency</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Currency"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>IBAN</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="IBAN"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Routing number</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Currency"
                  />
                </div>
              </div>

              <div class="form-group mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary m-l-5 ml-1">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->
        </div>
      </div>
      <!-- end col-->
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
          text: 'Add',
          active: true
        }
      ],
      typeform: {
        account_number: '',
        branch_number: '',
        owner_document_number: '',
        owner_name: '',
        branch_country: '',
        bank_code: '',
        bank_name: '',
        currency: '',
        iban: '',
        routing_number: ''
      },
      submit: false,
      typesubmit: false
    }
  }
}
</script>
