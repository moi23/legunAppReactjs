import styled from 'styled-components';

export const Container = styled.div`
		h2{
			text-align: center;
			margin-top: 5%;
		}
	.wrapperContainer{
		padding: 0 5%;
		display:flex;
		flex-wrap:wrap;
		justify-content:center;
	}

	.cardPerson{
		display:flex;
		flex-direction:column;
		align-items:center;
		margin-top:10%;
		/* border: solid 2px gray; */
		-webkit-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.22);
		-moz-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.22);
		box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.22);
		border-radius:10px;

		img{
			height: auto;
			width: 50%;
			border-radius: 50%;
			margin-bottom: 10px;
			margin-top:10px;
		}

		#AndroidButton{
			padding: 3vw 6vw;
			font-size: 3vw;
			background: #00B506;
			color: white;
			border: none;
			border-radius: 11px;
			text-transform: uppercase;
			margin-bottom: 5%;
			margin-top: 5%;
			text-decoration:none;
			text-align:center;

		}
		
		#IosButton{
			padding: 3vw 6vw;
			font-size: 3vw;
			background: blue;
			text-align:center;
			color: white;
			border: none;
			border-radius: 11px;
			text-transform: uppercase;
			margin-bottom: 15%;
			margin-top: 5%;
    }
}

.alignButtons{
	display:flex;
	flex-direction:column;
}

@media (min-width: 1025px) {
    
	h2{
			text-align: center;
			margin-top: 5%;
		}
	.wrapperContainer{
		padding: 0 5%;
		display:flex;
		flex-wrap:wrap;

		justify-content:center;
	}

	.cardPerson{
		display:flex;
		flex-direction:column;
		align-items:center;
		margin-top:10%;
		/* border: solid 2px gray; */
		-webkit-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.22);
		-moz-box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.22);
		box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.22);
		border-radius:10px;

		img{
			height: auto;
			width: 50%;
			border-radius: 50%;
			margin-bottom: 10px;
			margin-top:10px;
		}

		#AndroidButton{
			padding: 3vw 6vw;
			font-size: 3vw;
			background: #00B506;
			color: white;
			border: none;
			border-radius: 11px;
			text-transform: uppercase;
			margin-bottom: 5%;
			margin-top: 5%;
			text-decoration:none;
			text-align:center;

		}
		
		#IosButton{
			padding: 3vw 6vw;
			font-size: 3vw;
			background: blue;
			text-align:center;
			color: white;
			border: none;
			border-radius: 11px;
			text-transform: uppercase;
			margin-bottom: 15%;
			margin-top: 5%;
    }
}

	.alignButtons{
		display:flex;
		flex-direction:column;
	}

}
  


`;
