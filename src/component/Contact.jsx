import React from 'react'

const Contact = () => {
  return (
    <>
    
    <a href="#home" class="close-menu-link">
								<i class="close-button fas fa-times-circle fa-2x"></i>
							</a>
							
							
							<div class="hanging">
								<div class="logo-hanging">
									<i class="fas fa-envelope"></i>
								</div>
								<div class="text-hanging">
									<div class="word">
										<h6>CONTACT <span>ME</span></h6>
									</div>
								</div>
							</div>
							
							
							<div class="inner-content">
								
								<div class="head-content">
									<h3>Contact <span>Me</span></h3>
								</div>
								
								
								<div class="content">
									
									<div id="contact-info">
										
										<h5>Contact Info</h5>
										
										<div class="row no-gutters">
											
											<div class="list-contact-info col-12">
												<ul class="row no-gutters">
													
													<li class="col-sm-6 col-12">
														<span class="contact-info-name">Address</span>
														<span class="icon-of-value">
															<i class="fas fa-map-marker-alt"></i>
														</span>
														<span class="value">Uttara, Dhaka, Bangladesh</span>
													</li>
													
													
													<li class="col-sm-6 col-12">
														<span class="contact-info-name">Phone</span>
														<span class="icon-of-value">
															<i class="fas fa-mobile-alt"></i>
														</span>
														<span class="value">+88 01975105859</span>
													</li>
													
													
													<li class="col-sm-6 col-12">
														<span class="contact-info-name">Email</span>
														<span class="icon-of-value">
															<i class="fas fa-envelope"></i>
														</span>
														<span class="value">hasifmahmud98@gmail.com</span>
													</li>
													
													
													<li class="col-sm-6 col-12">
														<span class="contact-info-name">Website</span>
														<span class="icon-of-value">
															<i class="fas fa-globe"></i>
														</span>
														<span class="value">https://hasif-mahmud-portfolio.netlify.app</span>
													</li>
													
													
													<li class="col-12">
														<span class="contact-info-name">Social Media</span>
														<ul class="social-media">
															
															<li>
                                                            <a target="_blank" href="https://www.facebook.com/hasifmahmud.mahim.9">
																	<span class="front">
																		<i class="fab fa-facebook-f"></i>
																	</span>
																	<span class="back">
																		<i class="fab fa-facebook-f"></i>
																	</span>
																</a>
															</li>
															
															
															<li>
                                                            <a target="_blank" href="https://github.com/HasifMahmud98">
																	<span class="front">
																		<i class="fab fa-github"></i>
																	</span>
																	<span class="back">
																		<i class="fab fa-github"></i>
																	</span>
																</a>
															</li>
															
															
															<li>
                                                            <a target="_blank" href="https://www.instagram.com/direct/t/340282366841710300949128138363331919040">
																	<span class="front">
																		<i class="fab fa-instagram"></i>
																	</span>
																	<span class="back">
																		<i class="fab fa-instagram"></i>
																	</span>
																</a>
															</li>
															
															
															<li>
                                                            <a target="_blank" href="https://www.linkedin.com/in/hasif-mahmud-mahim-824478188/">
																	<span class="front">
																		<i class="fab fa-linkedin-in"></i>
																	</span>
																	<span class="back">
																		<i class="fab fa-linkedin-in"></i>
																	</span>
																</a>
															</li>
															
														</ul>
													</li>
													
												</ul>
											</div>
											
										</div>
									</div>
									
									
									<div id="contact-form">
										
										<h5>Contact Form</h5>
										
										<div class="row no-gutters">
											
											<div class="note col-lg-9 col-md-9 col-12">
												
												<p>Want to chat? Send me a message!</p>
												
											</div>
											
											
											<div class="alert contact-msg col-lg-9 col-md-9 col-12"></div>
											
											
											<div class="form-wrapper col-lg-9 col-md-9 col-12">
												<form name="contact" method="POST" action="https://rietts.com/projects/web-templates/metronal/preview/php/process-form.php">
													<div class="form-group clearfix">
														<div class="inner-form-group">
															<input type="text" name="name" placeholder="Name" class="form-control" autocomplete="off" required/>
														</div>
														<div class="inner-form-group">
															<input type="email" name="email" placeholder="Email" class="form-control" autocomplete="off" required/>
														</div>
													</div>
													<div class="form-group">
														<input type="text" name="subject" placeholder="Subject" class="form-control" autocomplete="off" required/>
													</div>
													<div class="form-group">
														<textarea name="message" placeholder="Message" class="form-control" autocomplete="off" required></textarea>
													</div>
													<div class="form-group">
														<button type="submit">
															<span class="front">
																<i class="fas fa-paper-plane"></i>
																<span class="value">Send <span>Message</span></span>
															</span>
															<span class="back">
																<i class="fas fa-paper-plane"></i>
																<span class="value">Send <span>Message</span></span>
															</span>
														</button>
													</div>
												</form>
											</div>
											
										</div>
									</div>
									
								</div>
								
							</div>
    
    </>
  )
}

export default Contact;