#!/usr/bin/env node

if (!process.argv[2] || process.argv[2])

var patternLength = parseInt(process.argv[2]),
    limit = 9,
    proxies = [
      [0,2,1],
      [2,0,1],
      [2,8,5],
      [8,2,5],
      [6,8,7],
      [8,6,7],
      [0,6,3],
      [6,0,3],
      [0,8,4],
      [8,0,4],
      [2,6,4],
      [6,2,4]
    ]

if (!patternLength || patternLength < 1 || patternLength > limit) {
  console.log('Usage: node bruteCalc.js patternLength')
  console.log('Please use a valid \'patternLength\' value (between 1 and 9)')
  process.exit(1)
}

function bf (length, stack, buffer) {
  buffer = !buffer ? [] : buffer;
  if (length <= 0) {
    stack.push(buffer)
  return stack
  }
  for (var i = 0; i < limit; i++) {
    if (buffer.indexOf(i) != -1) {
    continue
    }
    let pop = buffer[(buffer.length || 1) - 1]
    if (buffer.length > 0 && proxies.find(pr => pr[0] == pop && pr[1] == i && buffer.indexOf(pr[2]) == -1)) {
    continue
    }
  
    let clone = buffer.concat([])
    clone.push(i)
    bf(length-1,stack,clone)
  }
  return stack
}

var bfList = bf(patternLength, [])

bfList.forEach(s => console.log(s.join('')))
console.log('-----')
console.log('Pattern length : ' + patternLength)
console.log('Lock founds    : ' + bfList.length)
