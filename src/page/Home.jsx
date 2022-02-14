import React from 'react'
import About from '../component/About';
import Contact from '../component/Contact';
import Portfolio from '../component/Portfolio';
import Resume from '../component/Resume';

const Home = () => {
  return (
    <>
    
    <div id="wrapper">
			<div class="container-fluid">
				<div class="row no-gutters v-full">
					
					<div id="left-wrapper" class="col-12 col-lg-8">
						
						<div id="home" class="main-content">
							
							<div class="hanging">
								<div class="logo-hanging">
									<i class="fas fa-globe"></i>
								</div>
								<div class="text-hanging">
									<div class="word">
										<h6>HELLO <span>WORLD</span></h6>
									</div>
								</div>
							</div>
							
							
							<div class="inner-content">
								
								<div class="head-content">
									<h3>I'M <span class="name">Hasif Mahmud Mahim</span></h3>
									<h5>As a <span class="passion"></span></h5>
								</div>
								
								
								<div class="content">
									
									<div id="about-menu" class="box-wrapper">
										<div class="inner-box-wrapper">
											<a href="#about" class="menu-link">
												<div class="valign-center">
													<i class="fas fa-id-card fa-3x"></i>
													<h5>About <span>Me</span></h5>
												</div>
											</a>
										</div>
									</div>
									
									
									<div id="resume-menu" class="box-wrapper">
										<div class="inner-box-wrapper">
											<a href="#resume" class="menu-link">
												<div class="valign-center">
													<i class="fas fa-newspaper fa-3x"></i>
													<h5>My <span>Resume</span></h5>
												</div>
											</a>
										</div>
									</div>
									
									
									<div id="portfolio-menu" class="box-wrapper">
										<div class="inner-box-wrapper">
											<a href="#portfolio" class="menu-link">
												<div class="valign-center">
													<i class="fas fa-toolbox fa-3x"></i>
													<h5>My <span>Portfolio</span></h5>
												</div>
											</a>
										</div>
									</div>
									
									
									<div id="contact-menu" class="box-wrapper">
										<div class="inner-box-wrapper">
											<a href="#contact" class="menu-link">
												<div class="valign-center">
													<i class="fas fa-envelope fa-3x"></i>
													<h5>Contact <span>Me</span></h5>
												</div>
											</a>
										</div>
									</div>
									
								</div>
								
							</div>
							
						</div>
						
						
						<div id="about" class="main-content">
							
							<About/>
							
						</div>
						
						
						<div id="resume" class="main-content">
							
							<Resume/>
							
						</div>
						
						
						<div id="portfolio" class="main-content">
							
							<Portfolio/>
							
						</div>
						
						
						<div id="contact" class="main-content">
							
							<Contact/>
							
						</div>
						
					</div>
					
					
					<div id="right-wrapper" class="col-lg-4">
						
						<div class="lg-profile-picture"></div> 
						
					</div>	
					
				</div>
			</div>
		</div>

    </>
  )
}

export default Home;