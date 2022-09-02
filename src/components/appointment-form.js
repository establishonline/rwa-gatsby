import React from "react";

const Form = ({ bg, text }) => {
	return (
		<div>
			<form
				name='request_appointment'
				method='POST'
				netlify-honetpot='bot-field'
				data-netlify='true'>
				<input type='hidden' name='form-name' value='request_appointment' />
				<div className='hidden'>
					<label>
						Don't fill this out if you're human: <input name='bot-field' />
					</label>
				</div>
				<div className='flex flex-col md:flex-row mt-4'>
					<span className='flex flex-col basis-full max-w-full md:basis-6/12 md:max-w-6/12 mb-4 md:mb-0'>
						<input
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg}`}
							type='text'
							name='first_name'
							id='first_name'
						/>
						<label
							className={`font-bold text-${text} text-sm`}
							htmlFor='first_name'>
							First Name
						</label>
					</span>
					<span className='flex flex-col basis-full max-w-full md:basis-6/12 md:max-w-6/12'>
						<input
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg}`}
							type='text'
							name='last_name'
							id='last_name'
						/>
						<label
							className={`font-bold text-${text} text-sm`}
							htmlFor='last_name'>
							Last Name
						</label>
					</span>
				</div>
				<div className='flex flex-col md:flex-row mt-4'>
					<span className='flex flex-col basis-full max-w-full md:basis-6/12 md:max-w-6/12 mb-4 md:mb-0'>
						<input
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg}`}
							type='email'
							name='email'
							id='email'
						/>
						<label className={`font-bold text-${text} text-sm`} htmlFor='email'>
							Email
						</label>
					</span>
					<span className='flex flex-col basis-full max-w-full md:basis-6/12 md:max-w-6/12'>
						<input
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg}`}
							type='tel'
							name='phone'
							id='phone'
						/>
						<label className={`font-bold text-${text} text-sm`} htmlFor='phone'>
							Phone
						</label>
					</span>
				</div>
				<div className='flex flex-col md:flex-row mt-4'>
					<span className='flex flex-col basis-full max-w-full'>
						<textarea
							className={`border-b-2 border-solid border-${text} mr-6 bg-${bg}`}
							name='message'
							id='message'
						/>
						<label
							className={`font-bold text-${text} text-sm`}
							htmlFor='message'>
							Message
						</label>
					</span>
				</div>
				<div className='mt-8 text-center'>
					<button
						className='py-2 px-4 duration-700 bg-green text-white font-bold rounded-tl-xl rounded-br-xl border-2 border-green border-solid hover:bg-white hover:text-green'
						type='submit'
						value='Request an Appointment'>
						Request an Appointment
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
