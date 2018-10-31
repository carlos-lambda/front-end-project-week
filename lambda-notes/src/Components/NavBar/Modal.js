import React from 'react';
import './modal.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Axios from 'axios';

class ModalState extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<main>
				<Modal show={this.state.show} handleClose={this.hideModal} deletePost={this.props.deletePost} />
				<UnstyledButton type="button">edit</UnstyledButton>
				<UnstyledButton type="button" onClick={this.showModal}>
					delete
				</UnstyledButton>
			</main>
		);
	}
}

const Modal = ({ handleClose, show, deletePost }) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="areYouSure">
					<p>Are You Sure you Want to delete this?</p>
				</div>
				<div className="buttons">
					<StyledDeleteButton to="/" onClick={deletePost}>
						Delete
					</StyledDeleteButton>
					<StyledButton onClick={handleClose}>No</StyledButton>
				</div>
			</section>
		</div>
	);
};

export default ModalState;

export const UnstyledButton = styled.button`
	border: 0;
	text-decoration: underline;
	font-weight: bold;
	background-color: transparent;
	cursor: pointer;
`;

export const StyledDeleteButton = styled(Link)`
	text-decoration: none;
	margin: 10px;
	    padding: 9px 20px;

	width: 100px;
	border-radius: 3px;
	color: #ffffffff;
	background: #CA001A;
	border: 1px solid black;
	font-size: 18px;
	cursor: pointer;
	&:hover {
		background: #000000;
		color: #ffffffff;
	}`;

export const StyledButton = styled.button`
	margin: 10px;
	padding: 10px;
	width: 100px;
	border-radius: 3px;
	color: #ffffffff;
	background: #24b8bd;
	border: 1px solid black;
	font-size: 18px;
	cursor: pointer;
	&:hover {
		background: #000000;
		color: #ffffffff;
	}
`;