
import React from 'react';
import PageHero from '../components/common/PageHero.tsx';
import { MapPinIcon, PhoneIcon, MailIcon } from '../components/icons/Icons.tsx';
import { Input, Select, Textarea } from '../components/ui/Form.tsx';
import { Button } from '../components/ui/Button.tsx';

const ContactPage: React.FC = () => (
    <div className="font-sans bg-white">
        <PageHero
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out for inquiries, collaborations, or any questions."
        />
        <section className="py-20 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Online Inquiry</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Input
                                label="Name"
                                type="text"
                                id="contact-name"
                                placeholder="e.g. John Doe"
                                required
                            />
                            <Input
                                label="Email"
                                type="email"
                                id="contact-email"
                                placeholder="e.g. john.doe@example.com"
                                required
                            />
                        </div>
                        <Select
                            label="Services of Interest"
                            id="contact-service"
                            options={[
                                { value: '', label: 'Select a service' },
                                { value: 'ai-solutions', label: 'AI-Powered Solutions' },
                                { value: 'bioinformatics', label: 'Bioinformatics Research' },
                                { value: 'public-health', label: 'Public Health Informatics' },
                                { value: 'other', label: 'Other' }
                            ]}
                        />
                        <Textarea
                            label="Project Description"
                            id="contact-project-desc"
                            rows={5}
                            placeholder="Please describe your project or inquiry..."
                            required
                        />
                        <Button type="submit" variant="primary" className="w-full">
                            Submit Inquiry
                        </Button>
                    </form>
                </div>

                <div>
                    <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <MapPinIcon size={24} className="text-secondary mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold font-heading text-primary">Address</h3>
                                <p className="text-gray-700">100, Shukrabad, Dhanmondi, Dhaka-1207</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <PhoneIcon size={24} className="text-secondary mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold font-heading text-primary">Phone</h3>
                                <p className="text-gray-700">+8801843381652</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MailIcon size={24} className="text-secondary mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold font-heading text-primary">E-mail</h3>
                                <p className="text-gray-700">deepbiobd@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold font-heading mb-4 text-primary">Our Location</h3>
                        <div className="bg-gray-200 h-80 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.835159045331!2d-72.86877068476839!3d40.8322699793196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e84f553c2a1e75%3A0x7b337837ac308552!2s17%20Ramsey%20Rd%2C%20Shirley%2C%20NY%2011967%2C%20USA!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default ContactPage;