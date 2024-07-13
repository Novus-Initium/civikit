/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    ProjectRegistry: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              indexed: false,
              internalType: "struct MetaPtr",
              name: "metaPtr",
              type: "tuple",
            },
          ],
          name: "MetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnerAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnerRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ProjectCreated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "addProjectOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              internalType: "struct MetaPtr",
              name: "metadata",
              type: "tuple",
            },
          ],
          name: "createProject",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllProjects",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "protocol",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "pointer",
                      type: "string",
                    },
                  ],
                  internalType: "struct MetaPtr",
                  name: "metadata",
                  type: "tuple",
                },
              ],
              internalType: "struct ProjectRegistry.Project[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
          ],
          name: "getProjectOwners",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
          ],
          name: "projectOwnersCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "projects",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              internalType: "struct MetaPtr",
              name: "metadata",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "projectsCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "projectsOwners",
          outputs: [
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "prevOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "removeProjectOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              internalType: "struct MetaPtr",
              name: "metadata",
              type: "tuple",
            },
          ],
          name: "updateProjectMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
