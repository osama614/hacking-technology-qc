import React, { Component } from "react";

import Input from "../../../shared/components/FormFields/Input";
import TextArea from "../../../shared/components/FormFields/TextArea";
import { contactUsSchema } from "../../../shared/schemas/contact-us-schema";
import { validateInput, validateForm } from "../../../shared/utils/validation";
import { contactUs } from "../../../api/ContactUsApi";

class ContactUs extends Component {
  state = {
    contactInfo: {
      email: "",
      subject: "",
      message: "",
    },
    errors: {},
    successAlert: false,
    errorAlert: false,
  };

  onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    const contactInfo = { ...this.state.contactInfo };
    const errors = { ...this.state.errors };

    contactInfo[id] = value;

    const error = validateInput({ [id]: value }, id, contactUsSchema);
    if (!error) {
      delete errors[id];
    } else {
      errors[id] = error.message;
    }

    this.setState((prevState) => ({ contactInfo, errors }));
  };

  handleContactUs = (contactUsInfo) => {
    contactUs({ ...contactUsInfo })
      .then((res) => {
        if (res.data) {
          this.setState({ errorAlert: false, successAlert: true });
        }
      })
      .catch((error) => {
        this.setState({ errorAlert: true });
      });
  };

  sendMessage = () => {
    const contactInfo = { ...this.state.contactInfo };
    let errors = validateForm(contactInfo, contactUsSchema);

    if (errors) {
      this.setState((prevState) => ({ errors }));
      return;
    }

    this.handleContactUs({ ...contactInfo });
  };

  dismiss = () => {
    this.setState({
      errorAlert: false,
      successAlert: false,
    });
  };

  render() {
    return (
      <div className="contact-us-form col-lg-6">
        <div
          className="invalid-feedback general-error"
          style={{ display: this.state.generalError ? "block" : "none" }}
        >
          {this.state.generalError}
        </div>
        <div className="form-row">
          <Input
            type="text"
            id="subject"
            classNames="col-md-6"
            label="الموضوع"
            value={this.state.contactInfo.subject}
            error={this.state.errors.subject}
            onChange={this.onChange}
          />
        </div>
        <div className="form-row">
          <Input
            type="email"
            id="email"
            classNames="col-md-6"
            label="البريد الإلكتروني"
            value={this.state.contactInfo.email}
            error={this.state.errors.email}
            onChange={this.onChange}
          />
        </div>
        <TextArea
          id="message"
          rows="5"
          placeholder="رسالتك تبدأ هنا ..."
          value={this.state.contactInfo.body}
          error={this.state.errors.message}
          onChange={this.onChange}
        />
        <button
          className="btn btn-success float-right mt-2 mb-1"
          onClick={this.sendMessage}
        >
          إرسال
        </button>

        {this.state.successAlert && (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            تم إرسال الرسالة بنجاح! سوف نقوم بالرد عليك في أقرب وقت.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={this.dismiss}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {this.state.errorAlert && (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            لم يتم إرسال الرسالة! برجاء المحاولة مرة آخرى.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={this.dismiss}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ContactUs;
