import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }

    const handleDeleteDoctor = doctor =>{
        console.log(doctor)
    }

    const { data: doctors, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl mb-5'> Manage Doctors : {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full">
                                                <img src={doctor.image} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="my-modal" className="btn btn-sm">Delete</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingDoctor.name}. It cannot be undone`}
                successAction = { handleDeleteDoctor}
                successButtonName="Delete"
                modalData = {deletingDoctor}
                closeModal ={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;