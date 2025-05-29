import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import Modal, { type ModalProps } from './Modal';

const ModalStoryInfo = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography>
          Today, every company I talk to wants to implement a design system from
          scratch. Unfortunately, the details of a design system are not
          explored, so often they are not used to the maximum to create a useful
          user experience.
        </Typography>
        <Typography>
          New designers can take a look at any of the design patterns listed
          below to learn best practices and make informed design decisions on
          their projects.
        </Typography>
        <div className=" flex flex-col gap-3">
          <Button onClick={() => setIsOpen(false)}>Primary Button</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Secondary Button
          </Button>
        </div>
      </Modal>
    </>
  );
};

export const ModalSaveChanges: Story = {
  args: {
    isOpen: false,
    title: 'Do you want to save your changes?',
  },
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Typography>Your changes will be lost</Typography>
          <div className="flex flex-col gap-3">
            <Button onClick={() => setIsOpen(false)}>Save changes</Button>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Don't save
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const ModalDeleteAccount: Story = {
  args: {
    isOpen: false,
    title: 'Do you want delete account?',
  },
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Typography>All data will be lost</Typography>
          <div className="flex flex-col gap-3">
            <Button variant="danger" onClick={() => setIsOpen(false)}>
              Delete
            </Button>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const ModalWithStubs: Story = {
  args: {
    isOpen: false,
    title: 'Title',
  },
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Typography>text</Typography>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border border-dashed border-blue-500 text-blue-700 font-semibold px-4 py-2 text-center rounded"
              >
                Component stub
              </div>
            ))}
          </div>
        </Modal>
      </>
    );
  },
};

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalInfo: Story = {
  args: {
    isOpen: false,
    title: 'Modal Info',
  },
  render: (args: ModalProps) => {
    return <ModalStoryInfo {...args} />;
  },
};
