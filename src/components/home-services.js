import React from "react";

import Tabs from "./tabs";

const HomeServices = () => {
	return (
		<section id='services' className='py-16 bg-black rounded-tl-10xl'>
			<div className='container'>
				<div className='row'>
					<div className='basis-full max-w-full shrink-0 py-12'>
						<h2 className='text-5xl font-bold text-white leading-tight'>
							One Company,
							<br />
							Endless Possibilities
						</h2>
					</div>
				</div>
				<Tabs>
					<div label='Litigation'>
						<h3 className='text-2xl font-bold'>Litigation</h3>
						<p>
							R. Wadhwa &amp; Associates provides litigation service in its all
							practice areas. Our firm appears in personal hearings, appeals to
							the Commissioner, appeals to CESTAT (Tribunal) as well as tax
							appeals in High Courts etc.
						</p>
						<p>
							At R. Wadhwa &amp; Associates, we gather evidence on record with
							alternative options, carry out extensive research, analyse facts
							and deploy strategies in order to consolidate a legal
							comprehensive, foolproof and watertight legal strategy for our
							clients.
						</p>
						<p>
							The unique professional background of the team at R. Wadhwa &amp;
							Associates helps us to approach problems in innovative ways and
							put forth exemplary arguments to handle litigations.
						</p>
					</div>
					<div label='Advisory'>
						<h3 className='text-2xl font-bold'>Advisory</h3>
						<p>
							Tax advisory services at R. Wadhwa &amp; Associates are geared
							towards advising clients on establishment of tax management
							systems to ensure full compliance at the lowest cost.
						</p>
						<p>
							R. Wadhwa &amp; Associates provides services that encompass
							consultancy on taxation matters as well as handling the grassroot
							level execution of a vast range of tax requirements, covering
							diverse statutes. In addition to tax planning consultancy, the
							firm monitors and attends to all the compliance requirements of
							individual/ corporate clients with respect to provisions of Indian
							Tax Laws. This helps clients manage strategic, financial,
							operational, technological, and regulatory risk to enhance
							enterprise value. Issues like excisability of goods, chargeability
							of service tax/ VAT, classification of products under excise/
							customs/ VAT, tax implications during restructuring of business,
							availment of cenvat credit are the areas where our clients
							routinely seek our advice. R. Wadhwa &amp; Associates provides
							legal opinions in the entire range of Indirect Tax practice areas
							to assist its clients in their decision making with most
							appropriate legal backup.
						</p>
					</div>
					<div label='Consulting'>
						<h3 className='text-2xl font-bold'>Consulting</h3>
						<p>
							No matter how complex your business questions, R. Wadhwa &amp;
							Associates has the capabilities and experience to deliver the
							answers you need to move forward. Our aim is to help you take
							decisive action and achieve sustainable results.
						</p>
						<p>
							Our firm assists clients and provides them with guidance in
							decision making. Consulting services are provided for
							comprehensive services on tax issues. The team providing these
							services fully comprehends peculiar facts obtaining to a
							particular case. Each client benefits from oral guidance provided
							over the phone or during meeting, replies to queries through
							e-mail as well as comprehensive written opinions when required. R.
							Wadhwa &amp; Associates also provides regular updates on latest
							amendments in relevant practice areas. With an added advantage of
							having in-depth knowledge of a clients business domain, the team
							provides optimum, efficient and feasible solutions on key issues.
						</p>
					</div>
					<div label='Tax Reviews'>
						<h3 className='text-2xl font-bold'>Tax Reviews</h3>
						<p>
							With indirect tax becoming the governments preferred method of
							revenue raising, and evermore complicated regulations focused on
							combatting fraud, it's more critical than ever to manage indirect
							tax compliance and cash flows.
						</p>
						<p>
							R. Wadhwa &amp; Associates provides strategic tax review services
							to help our clients confirm correct payment of taxes, correct
							availment of cenvat credit/ input tax credit, benefits of tax
							concessions and exemptions available to them. Tax reviews also
							ensure that our client's tax strategies are aligned with their
							current business goals and structure. During the review process,
							we efficiently and judiciously understand our clients financials,
							as well as their tax situation to identify strategies that can
							maximize benefits, identify opportunities, and exposures for
							taking corrective action
						</p>
						<p>
							The tax review team of R. Wadhwa &amp; Associates has sound
							knowledge of tax laws and experience in interpretation of law and
							litigation. The team consists of individuals with a legal as well
							as accounting background and this dual skill set assists the
							client to streamline their tax compliances and optimum utilization
							of available tax benefits with the help of high-quality tax
							reviews.
						</p>
					</div>
					<div label='Statutory Audit'>
						<h3 className='text-2xl font-bold'>Statutory Audit</h3>
						<p>
							At R. Wadhwa &amp; Associates the audit processes are a composite
							of analytical process reviews, trend analysis, control overview,
							detailed transaction checks, software testing and physical audits.
							We have regular reviews to assess the quality, economy and
							efficiency of the operational performance and implement strategies
							for improvement. Our services are structured to adapt to the
							nature and size of the organization and guarantee a fair and true
							view of the entity on the basis of financial statements.
						</p>
						<p>
							Years of experience and extensive technical knowledge enables us
							to communicate with clients regarding business issues and help
							identify organisational areas susceptible to risks, based upon
							which we design solutions that mitigate those risks.
						</p>
						<p>
							Our innovative and exceptionally talented team is committed to
							undertaking all possible measures to eliminate fraud and stimulate
							transparency. Our complete compliance with the professional
							guidelines for Statutory Audit issued by the Institute of
							Chartered Accountants of India certifies accuracy and credibility.
						</p>
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default HomeServices;
