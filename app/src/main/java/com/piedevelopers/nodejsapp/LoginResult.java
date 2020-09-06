package com.piedevelopers.nodejsapp;

import com.google.gson.annotations.SerializedName;

public class LoginResult {

 // @SerializedName("email")
  //serialised tell the data with key name 'email' is to be stored in  email.is used when key ankd variable s different

    private String name;

    private String email;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
