import React from "react";
import "./user.css";
export default function User(user) {
    return (
        <>
            <div className="user">
                <div className="username">
                    <h2>{user.user.username}</h2>
                </div>
                <div className="userinfo">
                    <h3>Name:</h3> {user.user.name}
                    <h3>E-Mail:</h3> {user.user.email}
                    <h3>Address:</h3> {user.user.address.city},{" "}
                    {user.user.address.street}, {user.user.address.suite},{" "}
                    {user.user.address.zipcode}
                    <h3>Phone:</h3> {user.user.phone}
                    <h3>Website:</h3> {user.user.website}
                </div>
            </div>
        </>
    );
}
