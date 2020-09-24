import React, { useCallback, useState } from "react";

const CheatSheet = () => {
    const [expanded, setExpanded] = useState(false);
    const expand = useCallback(() => {
        setExpanded(prevState => !prevState);
    });
    return (<div>
        <button onClick={expand}>Cheat Sheet {expanded ? '▲' : '▼'}</button>
        {expanded && (
        <div style={{width: '200px', direction: 'rtl'}}>
            <div style={{width: '500px', direction: 'ltr'}}>
            <table>
                <colgroup>
                    <col style={{width: '35%'}}/>
                    <col style={{width: '65%'}}/>
                </colgroup>
                <thead>
                <tr>
                    <th>JSONPath</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><code>$</code></td>
                    <td>The root object/element</td>
                </tr>
                <tr>
                    <td><code>@</code></td>
                    <td>The current object/element</td>
                </tr>
                <tr>
                    <td><code>.</code></td>
                    <td>Child member operator</td>
                </tr>
                <tr>
                    <td><code>..</code></td>
                    <td>
                    Recursive descendant operator; JSONPath borrows this syntax from E4X
                    </td>
                </tr>
                <tr>
                    <td><code>*</code></td>
                    <td>Wildcard matching all objects/elements regardless their names</td>
                </tr>
                <tr>
                    <td><code>[]</code></td>
                    <td>Subscript operator</td>
                </tr>
                <tr>
                    <td><code>[,]</code></td>
                    <td>Union operator for alternate names or array indices as a set</td>
                </tr>
                <tr>
                    <td><code>[start:end:step]</code></td>
                    <td>Array slice operator borrowed from ES4 / Python</td>
                </tr>
                <tr>
                    <td><code>?()</code></td>
                    <td>Applies a filter (script) expression via static evaluation</td>
                </tr>
                <tr>
                    <td><code>()</code></td>
                    <td>Script expression via static evaluation</td>
                </tr>
                </tbody>
            </table>
            <p>Further <a target="_blank" rel="noopener noreferrer"  href="https://github.com/dchester/jsonpath#jsonpath-syntax">reference</a> with examples.</p>
            </div>
        </div>)}
    </div>
    );
}

export default CheatSheet;