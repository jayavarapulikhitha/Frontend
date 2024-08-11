import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../actions/api';
import {
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';

export const StudentData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(api + '/students');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Student Data</TableCaption>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Register No</Th>
            <Th>Mobile No</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
          data.map((val, index) => (
            <Tr key={index}>
              <Td>{val.email}</Td>
              <Td>{val.registerNo}</Td>
              <Td>{val.mobileNo}</Td>
              <Td>{val.password}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};


    

