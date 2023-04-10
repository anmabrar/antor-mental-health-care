import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });



    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful');
                    refetch();
                }
            })

    }

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name}'s profile deleted successfully`)
                }
            })
    }
    return (
        <div>
            <h2>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role !== 'admin'?
                                        <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-info'> Make Admin</button> :
                                         <button className='btn btn-xs btn-secondary'>Admin</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDeleteUser(user)} className='btn btn-xs btn-info'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;