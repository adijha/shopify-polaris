import React, { Fragment } from 'react';
import { Card, Layout, Heading, Button } from '@shopify/polaris';

import Checkbox from './Checkbox';

import DefaultTextField from './DefaultTextField';
function myFunction() {
	var x = document.getElementById('snackbar');
	x.className = 'show';
	setTimeout(function() {
		x.className = x.className.replace('show', '');
	}, 2000);
}

export default function Settings() {
  return (
    <Fragment>
      <form
        // action="https://immense-bastion-25565.herokuapp.com/myaction"
        action="http://localhost:4000/myaction"
        method="post"
      >
        <div>
          <Layout>
            <Layout.AnnotatedSection
              title="Admin Phone No."
              description="Admin will be notify on this no. by selecting Notify Admin."
            >
              <Card sectioned>
                <div style={{ padding: "3rem" }}>
                  <DefaultTextField
                    name="admin no"
                    label="Admin Phone No."
                    type="text"
                    maxLength="10"
                  />
                </div>
              </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="Sender ID"
              description="Sender ID is the name or number which appears on the mobile phone as the sender of a SMS. Sender ID will be maximum of 6 Characters."
            >
              <Card sectioned>
                <div style={{ padding: "3rem" }}>
                  <DefaultTextField
                    name="sender id"
                    label="Sender ID"
                    type="text"
                    maxLength="6"
                  />
                </div>
              </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="Notification Prefrence"
              description="Admin and Customer will be notified according to by selecting Notify Admin."
            >
              <Card sectioned>
                <div style={{ padding: "2rem" }}>
                  <p style={{ fontSize: "17px" }}>Orders</p>
                  <hr />

									<div style={{ display: 'flex' }}>
										<div style={{ marginRight: '1rem', width: '15rem' }}>
											<Heading>Create </Heading>
										</div>

                    <div style={{ width: "15rem" }}>
                      <Checkbox
                        name="orders/create customer"
                        label="Notify Customer"
                        hell="orders/create"
                      />
                    </div>
                    <Checkbox label="Notify Admin" name="orders/create admin" />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "1rem", width: "15rem" }}>
                      <Heading>Cancelled </Heading>
                    </div>

                    <div style={{ width: "15rem" }}>
                      <Checkbox
                        label="Notify Customer"
                        name="orders/cancelled customer"
                      />
                    </div>
                    <Checkbox
                      label="Notify Admin"
                      name="orders/cancelled admin"
                    />
                  </div>
                  {/* <div style={{ display: 'flex' }}>
									<div style={{ marginRight: '1rem', width: '15rem' }}>
										<Heading>Fulfilled </Heading>
									</div>

									<div style={{ width: '15rem' }}>
										<Checkbox label="Notify Customer" />
									</div>
									<Checkbox label="Notify Admin" />
								</div> */}
									{/* <div style={{ display: 'flex' }}>
									<div style={{ marginRight: '1rem', width: '15rem' }}>
										<Heading>Partially Fulfilled </Heading>
									</div>

									<div style={{ width: '15rem' }}>
										<Checkbox label="Notify Customer" />
									</div>
									<Checkbox label="Notify Admin" />
								</div> */}
									<div style={{ display: 'flex' }}>
										<div style={{ marginRight: '1rem', width: '15rem' }}>
											<Heading>Fullfilled </Heading>
										</div>

                    <div style={{ width: "15rem" }}>
                      <Checkbox
                        label="Notify Customer"
                        name="orders/fullfilled customer"
                      />
                    </div>
                    <Checkbox
                      label="Notify Admin"
                      name="orders/fullfilled admin"
                    />
                  </div>

									{/* <br />
								<p style={{ fontSize: '17px' }}>Customers Account</p>
								<hr />

								<div style={{ display: 'flex' }}>
									<div style={{ marginRight: '1rem', width: '15rem' }}>
										<Heading>Create </Heading>
									</div>

									<div style={{ width: '15rem' }}>
										<Checkbox label="Notify Customer" />
									</div>
									<Checkbox label="Notify Admin" />
								</div>
								<br />
								<p style={{ fontSize: '17px' }}>Refund</p>
								<hr /> */}
									{/* 
								<div style={{ display: 'flex' }}>
									<div style={{ marginRight: '1rem', width: '15rem' }}>
										<Heading>Create </Heading>
									</div>

									<div style={{ width: '15rem' }}>
										<Checkbox label="Notify Customer" />
									</div>
									<Checkbox label="Notify Admin" />
								</div> */}
                </div>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </div>
        <br />
        <div style={{ textAlign: "right" }} onClick={() => {}}>
          <button type="submit">save</button>
        </div>
      </form>
    </Fragment>
  );
}
