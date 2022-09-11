import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.name === "") {
      alert("name and email is required");
      return;
    }
    console.log(this.state);
    this.props.addContact(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="py-2 bg-gray-100">
        <h2 className="font-bold ml-2 text-2xl">Add Contact</h2>
        <form
          onSubmit={this.add}
          className="flex flex-col items-start justify-center form ml-4 py-4"
        >
          <div className="">
            <label>Name</label>
            <input
              className="ml-4"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              name="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="">
            <label id="contact">email</label>
            <input
              className="ml-4 mt-4"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="text"
              name="contact"
              placeholder="Enter Contact"
            />
          </div>
          <button className="mt-4 w-60  py-2 ring-1 ring-black bg-pink-100">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddContact;
