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
                <label> Document number</label>
                <input
                  v-model="typeform.name"
                  type="text"
                  class="form-control"
                  placeholder="Type something"
                  name="name"
                  :class="{ 'is-invalid': typesubmit && $v.typeform.name.$error }"
                />
                <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                  <span v-if="!$v.typeform.name.required">This value is required.</span>
                </div>
              </div>

              <div class="form-group">
                <label>Document type</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="text"
                    name="password"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.password.$error }"
                    placeholder="Password"
                  />
                  <div v-if="typesubmit && $v.typeform.password.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.password.required">This value is required.</span>
                    <span
                      v-if="!$v.typeform.password.minLength"
                    >Password must be at least 6 characters.</span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Social name</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="text"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.email.$error }"
                    placeholder="Enter a valid email"
                  />
                  <div v-if="typesubmit && $v.typeform.email.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.email.required">This value is required.</span>
                    <span v-if="!$v.typeform.email.email">This value should be a valid email.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Company name</label>
                <div>
                  <input
                    v-model="typeform.url"
                    type="url"
                    name="url"
                    class="form-control"
                    placeholder="URL"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.url.$error }"
                  />
                  <div v-if="typesubmit && $v.typeform.url.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.url.required">This value is required.</span>
                    <span v-if="!$v.typeform.url.url">This value should be a valid url.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Phone country code</label>
                <div>
                  <input
                    v-model="typeform.digit"
                    type="text"
                    name="digit"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.digit.$error }"
                    placeholder="Enter only digits"
                  />
                  <div v-if="typesubmit && $v.typeform.digit.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.digit.required">This value is required.</span>
                    <span v-if="!$v.typeform.digit.numeric">This value should be digits.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Phone area code</label>
                <div>
                  <input
                    v-model="typeform.number"
                    type="text"
                    name="number"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.number.$error }"
                    placeholder="Enter only numbers"
                  />
                  <div v-if="typesubmit && $v.typeform.number.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.number.required">This value is required.</span>
                    <span v-if="!$v.typeform.number.numeric">This value should be a valid number.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label> Phone number</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.alphanum.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.alphanum.required">This value is required.</span>
                    <span v-if="!$v.typeform.alphanum.alphaNum">This value should be alphanumeric.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Net monthly average income</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
                <div class="form-group">
                <label>Address street</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
                <div class="form-group">
                <label>  Address number</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
                <div class="form-group">
                <label> Address complement</label>
                <div>
                 <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
                <div class="form-group">
                <label>Address postal code</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
                <div class="form-group">
                <label>Address city</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
                <div class="form-group">
                <label>City</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
                <div class="form-group">
                <label>State</label>
                <div>
                 <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
               <div class="form-group">
                <label>Country</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
               <div class="form-group">
                <label>Fiscal Country</label>
                <div>
                 <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
               <div class="form-group">
                <label>Main Activity</label>
                <div>
                 <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
               <div class="form-group">
                <label>Net Value</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Company type</label>
                <div>
                 <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Partners document number</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Partners document type</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Partners kind</label>
                <div>
                <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Partners name</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Partners percentage share</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
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
  name: 'People',
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
          text: 'People',
          href: '/subject/people'
        },
        {
          text: 'List',
          active: true
        }
      ],
      typeform: {
        document_number: '',
        document_type: '',
        social_name: '',
        company_name: '',
        phone_country_code: '',
        phone_area_code: '',
        phone_number: '',
        net_monthly_average_income: '',
        address_street: '',
        address_number: '',
        address_complement: '',
        address_postal_code: '',
        address_city: '',
        address_state: '',
        address_country: '',
        fiscal_country: '',
        main_activity: '',
        activity_type: '',
        net_value: '',
        company_type: '',
        partners_document_number: '',
        partners_document_type: '',
        partners_kind: '',
        partners_name: '',
        partners_percentage_share: '',
        partners_address_country: '',
        references_document_number: '',
        references_document_type: '',
        references_kind: '',
        references_name: '',
        references_percentage_share: '',
        references_address_country: '',
        file_type: '',
        file_url: '',
        labels_social_contract: ''
      },
      submit: false,
      typesubmit: false
    }
  }
}
</script>
