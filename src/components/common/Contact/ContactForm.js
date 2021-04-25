import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Input';

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log('SENT');
    try {
      // console.log('Form Data: ', data);
      // await sendEmail(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
<div className="contact-page">

  <div className="header-wrapper">
      <p>Thanks for taking the time to reach out. How can I help you today?</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          placeholder="Name"
          label="Name*"
          name="name"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        {/* <Input
          id="lastName"
          placeholder="Last name"
          label="Last Name*"
          name="lastName"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        /> */}
        <Input
          id="email"
          placeholder="Email"
          label="Email*"
          name="email"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        {/* <Input
          id="phone"
          type="phone"
          placeholder="Phone number"
          label="Phone Number*"
          name="phone"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          type="date"
          id="weddingDate"
          label="Wedding Date*"
          placeholder="Wedding Date"
          name="weddingDate"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          type="time"
          id="arrivaltime"
          label="Arrival Time"
          placeholder="Stylist Arrival time"
          name="arrivalTime"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          type="time"
          id="endTime"
          label="End Time"
          placeholder="Stylist Deadline time"
          name="endTime"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          id="serviceLocation"
          placeholder="City, State, Area Code"
          label="Service Location"
          name="serviceLocation"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          id="makeupServices"
          placeholder="Number of services"
          label="Makeup Services"
          type="number"
          min={0}
          name="makeupServices"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          id="hairServices"
          placeholder="Number of services"
          label="Hair Services"
          type="number"
          min={0}
          name="hairServices"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        /> */}
        <Input
          id="message"
          placeholder="Enter your message"
          label="Message"
          maxLength={255}
          name="message"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <input
          id="submit"
          type="submit"
          name="submit"
          value="Submit"
          className="form-btn"
          // onClick={() => clearErrors('form')}
        />
      </form>
    </div>
  );
};

// interface IContactFormProps {
//   name: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
// }

export default ContactForm;