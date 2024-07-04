'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form,FormItem } from '@/components/ui/form';


import Navigate from 'next/navigation'
interface Props {
    name: string;
    lastname: string;
    age: number;
    address: string;
    job: string;
    education: string;
    experience: string;
    specialskills: string;
    sss: string;
    pagibig: string;
    tin: string;
    philhealh: string;
    picture: string;
    twitter: string;
}

const Dashboard: React.FC<Props> = () => {
    const [formData, setFormData] = useState<Props>({
        name: '',
        lastname: '',
        age: 0,
        address: '',
        job: '',
        education: '',
        experience: '',
        specialskills: '',
        sss: '',
        pagibig: '',
        tin: '',
        philhealh: '',
        picture: '',
        twitter: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/createuser', formData);
            setFormData(response.data);
            if(response){
              
               
            }
        } catch (error: any) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />

                <Input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" />

                <Input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" />

                <Input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />

                <Input name="job" value={formData.job} onChange={handleChange} placeholder="Job" />

                <Input name="education" value={formData.education} onChange={handleChange} placeholder="Education" />

                <Input name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" />

                <Input name="specialskills" value={formData.specialskills} onChange={handleChange} placeholder="Special Skills" />

                <Input name="sss" value={formData.sss} onChange={handleChange} placeholder="SSS" />

                <Input name="pagibig" value={formData.pagibig} onChange={handleChange} placeholder="PAG-IBIG" />

                <Input name="tin" value={formData.tin} onChange={handleChange} placeholder="TIN" />

                <Input name="philhealh" value={formData.philhealh} onChange={handleChange} placeholder="PhilHealth" />

                <Input name="picture" value={formData.picture} onChange={handleChange} placeholder="Picture" />

                <Input name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter" />

                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Dashboard;
