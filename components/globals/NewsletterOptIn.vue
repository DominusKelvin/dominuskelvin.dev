<template>
  <section class="newsletter">
    <h1>My Newsletter</h1>
    <p>
      I send out an email every so often about cool stuff I'm working on or
      launching. If you dig, go ahead and sign up!
    </p>
    <form
      action="https://app.convertkit.com/forms/1511017/subscriptions"
      class="seva-form formkit-form"
      method="post"
      data-sv-form="1511017"
      data-uid="2d86db555e"
      data-format="inline"
      data-version="5"
    >
      <div data-style="clean">
        <ul
          class="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        ></ul>
        <div
          data-element="fields"
          data-stacked="false"
          class="seva-fields formkit-fields"
        >
          <div class="formkit-field">
            <input
              class="formkit-input"
              name="email_address"
              placeholder="Your email address"
              required=""
              type="email"
            />
          </div>
          <button data-element="submit" class="formkit-submit">
            <div class="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>Subscribe</span>
          </button>
        </div>
        <div style="text-align: center;">
          <a
            href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
            class="formkit-powered-by"
            data-element="powered-by"
            target="_blank"
            rel="noopener noreferrer"
            >Powered By ConvertKit</a
          >
        </div>
      </div>
    </form>
  </section>
</template>
<style>
.newsletter {
  padding: 2rem 6rem;
}
.clean {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formkit-input {
  width: 95%;
  margin: 0;
  margin-bottom: 0.5rem;
  background: #fff;
  font-size: 15px;
  padding: 12px;
  border: 1px solid #e3e3e3;
  line-height: 1.4;
  -webkit-transition: border-color ease-out 300ms;
  transition: border-color ease-out 300ms;
  color: #000;
  border-color: #e3e3e3;
  border-radius: 4px;
  font-weight: 400;
}
.formkit-input:focus {
  outline: none;
  border-color: rgb(77, 148, 110);
  -webkit-transition: border-color ease 300ms;
  transition: border-color ease 300ms;
}

.formkit-submit {
  color: rgb(255, 255, 255);
  background-color: rgb(77, 148, 110);
  border-radius: 4px;
  border: 0;
  width: 100%;
  padding: 0.9rem 2rem;
  margin-bottom: 0.7rem;
  font-size: 1.2rem;
  cursor: pointer;
}

.formkit-submit:hover,
.formkit-submit:focus {
  background-color: rgb(46, 107, 74);
}

.formkit-powered-by {
  color: rgba(255, 255, 255, 0.2);
}

.formkit-powered-by:hover,
.formkit-powered-by:focus {
  color: rgba(255, 255, 255, 0.4);
}
</style>
