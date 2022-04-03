import React from "react";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Container,
  Text
} from "./SigninElements";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/' >dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign In</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required></FormInput>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton type='submit'> Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
