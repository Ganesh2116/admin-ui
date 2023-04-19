import React from "react";
import {
  Table,
  Button,
  Checkbox,
  Input,
  Pagination,
  Group,
} from "@mantine/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { IconSearch, IconTrash, IconPencil } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";

const App = () => {
  const [userinfor, setUserinfor] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((res) => {
        setUserinfor(res.data);
        console.log(userinfor);
      });
  }, []);

  const rows = userinfor
    .filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    )
    .map((data, index) => (
      <tr key={index}>
        <td>
          <Checkbox color="blue" />
        </td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.role}</td>
        <td>
          <Group>
            <ActionIcon color="blue" size="lg">
              <IconPencil />
            </ActionIcon>
            <ActionIcon color="red" size="lg">
              <IconTrash />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    ));

  return (
    <>
      <Center maw={1200} mx="auto" pb={100}>
        <Stack w="70%">
          <Group>
            <Input
              icon={<IconSearch size="0.9rem" stroke={1.5} />}
              placeholder="Search by name,email or role"
              rightSectionWidth={40}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Group>

          <Table>
            <thead>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Group position="apart" w="100%">
            <Button color="red">Delete Selected</Button>
            <Pagination total={6} radius="lg" withEdges />
          </Group>
        </Stack>
      </Center>
    </>
  );
};
export default App;
