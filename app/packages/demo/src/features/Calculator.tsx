import { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import Styles from '../styles'
import { RootStackParamList } from '../App'
import { sendRequest } from '../network/comm'

export type Operation = 'add' | 'sub' | 'mul' | 'div'

const Calculator = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const parseInputs = () => {
    if (firstNumber.trim() === '' || secondNumber.trim() === '') {
      setError('Please enter both numbers')
      setResult(null)
      return null
    }

    const a = Number(firstNumber)
    const b = Number(secondNumber)

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setError('Please enter valid numbers')
      setResult(null)
      return null
    }

    return { a, b }
  }

  const handleRes = async (operation: Operation, res: any) => {
    if (res === null) {
      setError(`backend error: ${operation}`)
    } else {
      setResult(res.res)
    }
  }

  const calculate = async (operation: Operation) => {
    const parsed = parseInputs()
    if (!parsed) return

    const { a, b } = parsed
    setError(null)

    switch (operation) {
      case 'add':
        const sum = await sendRequest('add', { x: a, y: b})
        handleRes(operation, sum)
        break
      case 'sub':
        const diff = await sendRequest('sub', { x: a, y: b})
        handleRes(operation, diff)
        break
      case 'mul':
        const prod = await sendRequest('mul', { x: a, y: b})
        handleRes(operation, prod)
        break
      case 'div':
        if (b === 0) {
          setError('Cannot divide by zero')
          setResult(null)
          return
        }
        const quot = await sendRequest('div', { x: a, y: b})
        handleRes(operation, quot)
        break
    }
  }

  const actions: Array<{ label: string; op: Operation }> = [
    { label: 'Add', op: 'add' },
    { label: 'Sub', op: 'sub' },
    { label: 'Mul', op: 'mul' },
    { label: 'Div', op: 'div' },
  ]

  return (
    <View style={Styles.container}>
      <TextInput
        testID='first-number-input'
        style={Styles.textInput}
        placeholder='Enter the first number'
        keyboardType='numeric'
        value={firstNumber}
        onChangeText={setFirstNumber}
      />

      <TextInput
        testID='second-number-input'
        style={Styles.textInput}
        placeholder='Enter the second number'
        keyboardType='numeric'
        value={secondNumber}
        onChangeText={setSecondNumber}
      />

      <View style={{ flexDirection: 'row', gap: 8 }}>
        {actions.map(action => (
          <Pressable
            key={action.op}
            testID={`${action.op}-button`}
            style={Styles.smallButton}
            onPress={() => calculate(action.op)}
          >
            <Text>{action.label}</Text>
          </Pressable>
        ))}
      </View>

      {error && <Text testID='calculator-error'>{error}</Text>}
      {result !== null && <Text testID='calculator-result'>Result: {result}</Text>}

      <Pressable
        testID='home-button'
        style={Styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Calculator