import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormSchemaFull } from "../models/User";
import type { UserFormFull } from "../models/User";
import "./Form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<UserFormFull>({
    resolver: zodResolver(UserFormSchemaFull),
  });

  const onSubmit: SubmitHandler<UserFormFull> = (data) => {
    console.log(data);
  };

  return (
    <div className="form-wrapper">
      <button
        type="button"
        onClick={() => trigger()}
        className="trigger-button"
      >
        Display Data Requirements
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2>User Details</h2>
        <hr />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" {...register("name")} placeholder="John Doe" />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              {...register("username")}
              placeholder="johndoe90"
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="johndoe@example.com"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input {...register("phone")} placeholder="555-555-5555" />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
          <div className="form-group">
            <label>Website</label>
            <input {...register("website")} placeholder="example.com" />
            {errors.website && (
              <p className="error">{errors.website.message}</p>
            )}
          </div>
        </div>

        <h2>Address</h2>
        <hr />

        <div className="form-row">
          <div className="form-group">
            <label>Street</label>
            <input {...register("address.street")} placeholder="123 Main St" />
            {errors?.address?.street && (
              <p className="error">{errors.address.street.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Suite</label>
            <input {...register("address.suite")} placeholder="Apt 4B" />
            {errors?.address?.suite && (
              <p className="error">{errors.address.suite.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>City</label>
            <input {...register("address.city")} placeholder="New York" />
            {errors?.address?.city && (
              <p className="error">{errors.address.city.message}</p>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Zipcode</label>
            <input {...register("address.zipcode")} placeholder="12345-6789" />
            {errors?.address?.zipcode && (
              <p className="error">{errors.address.zipcode.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Latitude</label>
            <input {...register("address.geo.lat")} placeholder="-37.3159" />
          </div>
          <div className="form-group">
            <label>Longitude</label>
            <input {...register("address.geo.lng")} placeholder="81.1496" />
          </div>
        </div>

        <h2>Company Info</h2>
        <hr />

        <div className="form-row">
          <div className="form-group">
            <label>Company Name</label>
            <input {...register("company.name")} placeholder="Tech Corp" />
            {errors?.company?.name && (
              <p className="error">{errors.company.name.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Catch Phrase</label>
            <input
              {...register("company.catchPhrase")}
              placeholder="Innovate boldly"
            />
            {errors?.company?.catchPhrase && (
              <p className="error">{errors.company.catchPhrase.message}</p>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
