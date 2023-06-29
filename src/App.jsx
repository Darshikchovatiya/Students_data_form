<>
    <form>
        <input type="hidden" id="editid" />
        {/* name 45 email 45 password 16 phone 10 */}
        <label for="name">Name : </label>
        <input type="text" id="name" placeholder="Enter Your Name" />
        <p id="name_er" style="color: red; display: contents;"></p>
        <br />
        <br />
        <label for="email">Email : </label>
        <input type="em" id="email" placeholder="Enter Your Email Id" />
        <p id="email_er" style="color: red; display: contents;"></p>
        <br />
        <br />
        <label for="password">Password : </label>
        <input type="password" id="password" placeholder="Enter Your Password" />
        <p id="pass_er" style="color: red; display: contents;"></p>
        <div id="message">
            <h3>Password must contain the following:</h3>
            <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
            <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
            <p id="number" class="invalid">A <b>number</b></p>
            <p id="length" class="invalid">Minimum <b>8 characters</b> and Maximum <b>16 characters</b></p>
        </div>
        <br />
        <br />
        <label for="phone">Phone : </label>
        <input type="number" id="phone" placeholder="Enter Phone Number" />
        <p id="phone_er" style="color: red; display: contents;"></p>
        <br />
        <br />
        <div class="se_btn">
            <input type="button" id="save_btn" onclick="save()" value="Submit" class="btn" />
            <input type="button" id="edit_btn" onclick="edit()" value="Edit" class="btn" />
        </div>
    </form>
    <br />
    <br />
    <br />
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Phone</td>
            <td>Action</td>
        </tr>
        <tbody id="user_data"></tbody>
    </table>
</>