import { useState } from 'react'

const dataList = [
	{ id: 1, name: 'chk1', text: '연령 (만 14세 이상) 확인 (필수)', isChecked: false },
	{ id: 2, name: 'chk2', text: '증권플러스 이용약관 (필수)', isChecked: false },
	{ id: 3, name: 'chk3', text: '개인정보 수집 및 이용에 대한 동의 (필수)', isChecked: false },
	{ id: 4, name: 'chk4', text: '이벤트 우대혜택 동의 안내 (선택)', isChecked: false },
]

const Test5 = () => {
	const [data, setData] = useState(dataList)
	const changeInput = (e) => {
		const { checked, name } = e.target

		if (name === 'all') {
			setData(data.map(item => {
				return {
					...item,
					isChecked: checked
				}
			}))

		} else {
			setData(data.map(item => item.name === name ?
				{ ...item, isChecked: checked } : item)
			)
		}
	}

	return (
		<div>
			<p>
				<input type="checkbox" name="all" onChange={changeInput}
					checked={
						data.filter(item => item.isChecked !== true).length < 1
					}
				/>
				<label>전체 약관동의</label>
			</p>
			<hr />
			{
				data.map(item => {
					return <p key={item.id}>
						<input type="checkbox" name={item.name} checked={item.isChecked} onChange={changeInput} />
						<label>{item.text}</label>
					</p>
				})
			}
		</div>
	);
};

export default Test5;